import React, { FC, useMemo } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { WPPost } from "../libs/wpapi/interfaces";
import { WPAPIURLBuilder, WPAPIURLFactory } from "../libs/wpapi/UrlBuilder";
import { fetch } from "../libs/polyfill/fetch";
import { canUseServerSideFeatures } from "../libs/next.env";
import {
  formatPostDateToString,
  getThePostAuthor,
  getThePostFeatureImage,
} from "../libs/wpapi/format";

const urlBuilder = WPAPIURLFactory.init(process.env.WORDPRESS_URL)
  .postType("posts")
  .startAt(1)
  .withEmbed();
export const uniqWPPosts = (posts: WPPost[]): WPPost[] => {
  const ids: string[] = [];
  return posts.filter((post) => {
    if (ids.indexOf(post.id) > -1) return false;
    ids.push(post.id);
    return true;
  });
};

export const listAllPosts = async (
  APIURLBuilder: WPAPIURLBuilder,
  posts: WPPost[] = []
): Promise<WPPost[]> => {
  const perPage = 20;
  try {
    const url = APIURLBuilder.perPage(20).getURL();
    const response = await fetch(url);
    if (
      response instanceof Error ||
      (response.data && response.data.status && response.data.status > 399)
    ) {
      throw response;
    }
    const mergedPosts = uniqWPPosts([...posts, ...response]);
    if (canUseServerSideFeatures() || response.length < perPage) {
      return mergedPosts;
    }
    APIURLBuilder.nextPage();
    return listAllPosts(APIURLBuilder, mergedPosts);
  } catch (e) {
    if (e.code && e.code === "rest_invalid_param") {
      return posts;
    }
    throw e;
  }
};

export const SinglePost: FC<{
  post?: WPPost;
}> = ({ post }) => {
  if (!post) return;
  const author = getThePostAuthor(post);
  const terms = post._embedded["wp:term"];
  const termItems = useMemo(() => {
    if (!terms) return;
    return terms.flat().filter(Boolean);
  }, [terms]);
  const featuredImage = getThePostFeatureImage(post, "large");
  return (
    <>
      {featuredImage ? (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={featuredImage.source_url}
            width={featuredImage.witdh}
            height={featuredImage.height}
            alt={featuredImage.alt_text}
          />
        </div>
      ) : null}
      <>
        <h1>{post.title.rendered}</h1>
        <div>
          <div aria-label="Created">{formatPostDateToString(post)}</div>
          {author ? <div aria-label="Author">{author.name}</div> : null}
          {termItems ? (
            <div aria-label="Taxonomies">
              {termItems.map((item) => (
                <span key={item.id} style={{ marginRight: "5px" }}>
                  {item.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.rendered,
        }}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await listAllPosts(urlBuilder);
  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id,
        slug: decodeURI(post.slug),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {
        post: null,
      },
    };
  }
  const slug = typeof params.slug === "string" ? params.slug : params.slug[0];
  const urlBuilder = WPAPIURLFactory.init(process.env.WORDPRESS_URL)
    .postType("posts")
    .withEmbed();
  const post = await fetch(urlBuilder.slug(slug).getURL());
  return {
    props: {
      post: post[0] || null,
    },
  };
};

export default SinglePost;
