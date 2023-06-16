import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import useSWR from "swr";
import { fetch } from "../libs/polyfil/fetch";
import { WPPost } from "../libs/wpapi/interfaces";
import { WPAPIURLFactory } from "../libs/wpapi/UrlBuilder";
import { PostArchives } from "../components/archives/Posts";

const urlBuilder = WPAPIURLFactory.init(process.env.WORDPRESS_URL)
  .postType("posts")
  .startAt(1)
  .perPage(50)
  .withEmbed();

export const Home: FC<{
  posts: WPPost[];
}> = ({ posts: initialProps }) => {
  const { data: posts } = useSWR<Array<WPPost>>(urlBuilder.getURL(), fetch, {
    initialData: initialProps,
  });
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <PageHeader title="Recent Post" /> */}
      <PostArchives posts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  posts: WPPost[];
}> = async () => {
  const url = urlBuilder.getURL();
  const posts = await fetch(url);
  return {
    props: {
      posts,
    },
  };
};

export default Home;
