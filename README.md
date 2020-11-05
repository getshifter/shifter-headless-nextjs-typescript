## Next.js WordPress example (TypeScript)


## Getting Started

```bash
$ npx create-next-app YOUR_APP_NAME --example "https://github.com/wpkyoto/nextjs-starter-typescript/tree/main"
$ cd YOUR_APP_NAME

$ vim .envrc
export WORDPRESS_URL=https://src.wordpress-develop.dev/wp-json
$ direnv allow

$ npm run dev
# or
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Build & Deployment

### Static Export

```bash
$ yarn export (or npm run export)
$ npx serve build
```

### Serverless hosting with AWS

WIP