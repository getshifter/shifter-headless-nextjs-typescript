export interface WPAPIURLBuilder {
  path(path: string): this;
  postType(postType: "posts" | "pages"): this;
  startAt(startAt: number): this;
  nextPage(): this;
  withEmbed(): this;
  perPage(perPage: number): this;
  search(search: string): this;
  slug(slug: string): this;
  query(query: string): this;
  getURL(): string;
}

export class WPAPIURLFactory {
  /**
   *
   * @param endpoint WP API endpoint url (https://src.wordpress-develop.dev/wp-json)
   */
  public static init(endpoint: string, namespace = "wp/v2"): WPAPIURLBuilder {
    const api = {
      path: "",
      queryString: {
        embed: false,
        search: "",
        perPage: 20,
        startAt: 1,
        custom: "",
        slug: "",
      },
    };

    return {
      path(path: string) {
        api.path = path;
        return this;
      },
      postType(postType: "posts" | "pages") {
        api.path = postType;
        return this;
      },
      startAt(startAt: number) {
        api.queryString.startAt = startAt;
        return this;
      },
      nextPage() {
        api.queryString.startAt = api.queryString.startAt + 1;
        return this;
      },
      withEmbed() {
        api.queryString.embed = true;
        return this;
      },
      perPage(perPage: number) {
        api.queryString.perPage = perPage;
        return this;
      },
      search(search: string) {
        api.queryString.search = search;
        return this;
      },
      slug(slug: string) {
        api.queryString.slug = slug;
        return this;
      },
      query(query: string) {
        api.queryString.custom = query;
        return this;
      },
      getURL(): string {
        const url = [endpoint, namespace, api.path].join("/");
        const queryString = Object.entries(api.queryString)
          .reduce((prevQueries, [key, value]) => {
            if (key === "embed" && value === true) prevQueries.push("_embed");
            if (key === "search" && !!value)
              prevQueries.push(`search=${value}`);
            if (key === "slug" && !!value) prevQueries.push(`slug=${value}`);
            if (key === "perPage") prevQueries.push(`per_page=${value}`);
            if (key === "startAt") prevQueries.push(`page=${value}`);
            if (key === "custom" && !!value) prevQueries.push(value);
            return prevQueries;
          }, [])
          .join("&");
        return [url, queryString].join("?");
      },
    };
  }
}
