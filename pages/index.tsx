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
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          From the blog
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
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
