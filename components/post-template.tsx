import { useMemo } from "react";
import {
  formatPostDateToString,
  getThePostFeatureImage,
  getThePostAuthor,
} from "../libs/wpapi/format";
import { WPPost } from "../libs/wpapi/interfaces";
import Link from "next/link";

export const PostTemplate = (post: WPPost) => {
  const featuredImage = getThePostFeatureImage(post, "large");
  const author = getThePostAuthor(post);
  const terms = post._embedded["wp:term"];
  const termItems = useMemo(() => {
    if (!terms) return;
    return terms.flat().filter(Boolean);
  }, [terms]);
  return (
    <article
      key={post.id}
      className="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        {featuredImage ? (
          <img
            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
            src={featuredImage.source_url}
            width={featuredImage.witdh}
            height={featuredImage.height}
            alt={featuredImage.alt_text}
          />
        ) : null}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time
            dateTime={post.date}
            className="text-gray-500 dark:text-gray-200"
          >
            {formatPostDateToString(post)}
          </time>
          {termItems ? (
            <div aria-label="Taxonomies" className="space-x-1">
              {termItems.map((item) => (
                <span
                  key={item.id}
                  className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-700 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {item.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300">
            <Link href={decodeURI(post.slug)}>
              {post.title.rendered}
            </Link>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <img
              src={author.source_url}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                <span className="absolute inset-0" />
                {author.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
