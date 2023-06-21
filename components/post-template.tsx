import { WPPost } from "../libs/wpapi/interfaces";

export const PostTemplate = (post: WPPost) => {
  return (
    <div>
      <a href={`/${post.slug}/`}>
        <h3>{post.title.rendered}</h3>
      </a>
    </div>
  );
};