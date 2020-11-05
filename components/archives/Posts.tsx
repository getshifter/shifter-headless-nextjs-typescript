import React, {FC, ReactNode, useMemo} from 'react'
import Link from 'next/link'
import { List, Avatar, Space } from 'antd';
import { WPPost } from '../../libs/wpapi/interfaces'
import { formatPostDateToString, getThePostAuthor, getThePostFeatureImage } from '../../libs/wpapi/format';

export const ArchiveThumbnail: FC<{
    post: WPPost
}> = ({post}) => {
    const featuredImage = getThePostFeatureImage(post, 'medium')
    return featuredImage ? (
        <Link href={`/${post.slug}`}>
            <img
            src={featuredImage.source_url}
            alt={featuredImage.alt_text}
            width={featuredImage.witdh}
            height={featuredImage.height}
            style={{cursor: 'pointer'}}
            />
        </Link>
      ): null
}

export const PostArchiveItem = (post: WPPost): ReactNode => {
    const author = getThePostAuthor(post)
    const terms = post._embedded['wp:term']
    const actions = useMemo(() => {
        if (!terms) return null
        return terms.map(termItems => {
            if (!termItems) return null;
            return termItems.map(term => (
              <Space key={term.id}>{term.name}</Space>
            ))
          }).flat()
    }, [terms])  

    return (
      <List.Item
        key={post.id}
        extra={<ArchiveThumbnail post={post} />}
        actions={actions}
      >
        <List.Item.Meta
          avatar={
            author ? (
              <Avatar src={author.source_url} />
            ): null
          }
          title={<Link href={`/${post.slug}`}>
            <span
              style={{
                fontSize: "1.5rem",
                cursor: 'pointer'
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
}

export const PostArchives: FC<{
    posts: WPPost[]
}> = ({posts}) => (
    <List
    itemLayout="vertical"
    size="large"
    dataSource={posts}
    renderItem={PostArchiveItem}
  />
)