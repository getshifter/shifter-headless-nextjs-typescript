import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { fetch } from "../libs/polyfill/fetch";
import { WPPost } from "../libs/wpapi/interfaces";
import { WPAPIURLFactory } from "../libs/wpapi/UrlBuilder";
import { Archives } from "../components/archives";

const urlBuilder = WPAPIURLFactory.init(process.env.WORDPRESS_URL)
  .postType("posts")
  .startAt(1)
  .perPage(50)
  .withEmbed();

export const Home: FC<{
  posts: WPPost[];
}> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Shifter Headless Next JS TypeScript</title>
        <meta
          name="description"
          content="Shifter Headless Next JS Starter Template: A solid foundation for fast, scalable, and SEO-friendly headless WordPress websites with Next.js and Shifter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Archives posts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const url = urlBuilder.getURL();
  const posts = await fetch(url);
  return {
    props: {
      posts,
    },
  };
};

export default Home;
