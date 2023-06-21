import React, { FC } from "react";
import { WPPost } from "../libs/wpapi/interfaces";
import { PostTemplate } from "./post-template";

interface ListProps<T> {
  posts: T[];
  // Render the list items
  renderItem: (item: T) => React.ReactNode;
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

export const Archives: FC<{
  posts: WPPost[];
}> = ({ posts }) => <List posts={posts} renderItem={PostTemplate} />;
