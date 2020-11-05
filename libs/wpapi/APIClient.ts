import { fetch } from "../polyfil/fetch";
import { WPPost } from "./interfaces";
import { WPAPIURLBuilder, WPAPIURLFactory } from "./UrlBuilder";

export class WPAPIClient {
    public readonly URLBuilder: WPAPIURLBuilder
    constructor(endpoint: string, namespace = 'wp/v2') {
        this.URLBuilder = WPAPIURLFactory.init(endpoint, namespace)
    }
    public listPostsURL(): string {
        const url = this.URLBuilder.postType('posts').getURL()
        return url
    }
    public async listPosts(): Promise<WPPost[]> {
        const url = this.listPostsURL()
        const result = await fetch(url)
        return result
    } 
}