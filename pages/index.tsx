import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import Link from 'next/link'
import { List, Avatar, Space } from 'antd';
import { fetch } from '../libs/polyfil/fetch'
import { WPPost } from '../libs/wpapi/interfaces'
import { WPAPIURLFactory } from '../libs/wpapi/UrlBuilder'
import { formatPostDateToString, getThePostAuthor, getThePostFeatureImage } from '../libs/wpapi/format';

const urlBuilder = WPAPIURLFactory.init(
  'https://f22ea9dbddf63a6e3b8921370b53a7cd21f0263c.hl-b.getshifter.co/wp-json'
).postType('posts').startAt(1).withEmbed()


export const Home:FC<{
  posts: WPPost[]
}> = ({posts}) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Recent posts</h1>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={posts}
        renderItem={post => {
          const featuredImage = getThePostFeatureImage(post, 'medium')
          const author = getThePostAuthor(post)
          const terms = post._embedded['wp:term']          
          return (
            <List.Item
              key={post.id}
              extra={featuredImage ? (
                <img
                  src={featuredImage.source_url}
                  alt={featuredImage.alt_text}
                  width={featuredImage.witdh}
                  height={featuredImage.height}
                />
              ): null}
              actions={terms ? terms.map(termItems => {
                if (!termItems) return null;
                return termItems.map(term => (
                  <Space key={term.id}>{term.name}</Space>
                ))
              }).flat(): null}
            >
              <List.Item.Meta
                avatar={
                  author ? (
                    <Avatar src={author.source_url} />
                  ): null
                }
                title={<Link href="/">
                  <span
                    style={{
                      fontSize: "1.5rem"
                    }}
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered
                    }}
                  />
                </Link>}
                description={formatPostDateToString(post)}
              />
              <div dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered.substr(0, 300)
              }} />
            </List.Item>
          )
        }}
      />
    </div>
  )
}


export const getStaticProps: GetStaticProps<{
  posts: WPPost[]
}> = async () => {
  const url = urlBuilder.getURL()
  const posts = await fetch(url)
  return {
    props: {
      posts
    }
  }
}

export default Home