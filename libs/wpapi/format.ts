import { default as dayjs } from "dayjs";
import { WPMediaDetailSize, WPMediaDetailSizes, WPPost } from "./interfaces";

export const formatPostDateToString = (
  post?: Pick<WPPost, "date">,
  format = "YYYY/MM/DD"
) => {
  if (!post || !post.date) return "";
  return dayjs(post.date).format(format);
};

export const getThePostFeatureImage = (
  post?: Pick<WPPost, "_embedded">,
  size: keyof WPMediaDetailSizes = "thumbnail"
):
  | (WPMediaDetailSize & {
      alt_text?: string;
    })
  | undefined => {
  if (!post || !post._embedded || !post._embedded["wp:featuredmedia"]) return;
  const featuredMedia = post._embedded["wp:featuredmedia"][0];
  if (!featuredMedia || !featuredMedia.media_details) return;
  const { sizes } = featuredMedia.media_details;
  const targetSize = sizes[size] || sizes.full;
  return {
    ...targetSize,
    alt_text: featuredMedia.alt_text,
  };
};

export const getThePostAuthor = (
  post?: Pick<WPPost, "_embedded">,
  size: "24" | "48" | "96" = "48"
) => {
  if (!post || !post._embedded || !post._embedded["author"]) return;
  const author = post._embedded["author"][0];
  if (!author) return;
  return {
    source_url: author.avatar_urls[size],
    name: author.name,
    description: author.description,
  };
};
