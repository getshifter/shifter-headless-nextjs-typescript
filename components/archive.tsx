import React, { FC, ReactNode, useMemo } from "react";
import { WPPost } from "../libs/wpapi/interfaces";

const renderPost = (post: WPPost) => {
  return (
    <div>
      <a href={`/${post.slug}/`}>
        <h3>{post.title.rendered}</h3>
      </a>
    </div>
  );
};

interface ListProps<T> {
  posts: T[];
  //Render the list items
  renderItem: (item: T) => React.ReactNode; //Or JSX.Element
}

const List = <T extends {}>({ posts, renderItem }: ListProps<T>) => {
  return posts ? (
    <ul>
      {posts.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  ) : null;
};

export const PostArchives: FC<{
  posts: WPPost[];
}> = ({ posts }) => <List posts={posts} renderItem={renderPost} />;
