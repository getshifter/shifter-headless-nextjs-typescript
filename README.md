# Shifter Headless Next JS Starter Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bb22d60-9c6e-49c1-8885-b7673506f8c2/deploy-status)](https://app.netlify.com/sites/musical-mermaid-f30aba/deploys)

[![ja](https://img.shields.io/badge/lang-ja-red.svg)](https://github.com/getshifter/shifter-headless-nextjs-typescript/blob/main/README.ja.md)

![Shifter Headless Next JS Starter Template](https://cdn.getshifter.co/6979d2c20e0f14c46f6b6eac8659c6136a0b4a67/uploads/2023/03/1-1024x626.png)

This is a starter template for building headless WordPress websites using Next.js and Shifter. It provides a solid foundation for creating fast, scalable, and SEO-friendly websites with a decoupled frontend and WordPress as a headless CMS.

## Features

- Built with Next.js: A powerful and flexible React framework for building modern web applications.
- TypeScript: Type checking and improved developer experience.
- Headless WordPress: Utilize WordPress as a headless CMS to manage content.
- Shifter: Seamless integration with Shifter, a serverless WordPress hosting and deployment platform.
- Scalable architecture: Easily scale your website as your content grows and traffic increases.

[Live Demo](https://shifter-headless-nextjs-typescript.netlify.app)

## Getting Started

To get started with the Shifter Headless Next JS Starter Template, follow these steps:

1. Clone or download the template from the [GitHub repository](https://github.com/getshifter/shifter-headless-nextjs-typescript).
2. Install the dependencies by running `npm install` or `yarn install`.
3. Rename the `.env.example` file to `.env` and update the `WORDPRESS_URL` variable with your WordPress site's API URL.
   ```plaintext
   WORDPRESS_URL=https://your-wordpress-site.com/wp-json
   ```
4. Start the development server with `npm run dev` or `yarn dev`.
5. Open your browser and visit `http://localhost:3000` to see the website in action.

## Configuration

The following configuration options are available in the `.env` file:

- `WORDPRESS_URL`: The URL of your headless WordPress site's API endpoint.

## Usage

The Shifter Headless Next JS Starter Template provides a set of convenient commands that you can use to develop, build, and deploy your Next.js website or application. Here's a breakdown of the available commands:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "npx serve@latest out"
}
```

- **dev**: This command starts the Next.js development server, enabling hot module reloading for automatic updates in the browser as you make changes to your website or application. Use the following command to run the development server:

  ```shell
  npm run dev
  ```

- **build**: The build command compiles your Next.js website or application into an optimized and production-ready bundle. It performs various optimizations, such as code minification and static file generation. To build your website or application, run the following command:

  ```shell
  npm run build
  ```

  After running the build command, a new `out` directory will be created in the root of your project. This directory contains the compiled output of your website or application, ready to be deployed.

- **start**: The start command serves the compiled Next.js website or application using the `serve` package. It serves the content from the `out` directory created during the build process. This command is useful when you want to preview your production-ready website or application locally. To start the server, run the following command:

  ```shell
  npm start
  ```

  By default, the server will be accessible at `http://localhost:3000`, unless you modify the port configuration in your code.

Feel free to use and modify these commands to fit your specific requirements. They provide a convenient way to manage the development and deployment lifecycle of your Next.js website or application based on the Shifter Headless Next JS Starter Template.

Please note that the `npm` commands mentioned above can be replaced with `yarn` if you prefer using Yarn as your package manager.

## Deploying to Netlify

To deploy the Shifter Headless Next JS Starter Template to Netlify, follow these steps:

1. Configure the build settings for your Netlify site:
   - Build command: `npm run build`
   - Publish directory: `out`

2. Set up environment variables:
   - In the "Advanced build settings" section of your Netlify site configuration, click on "New variable" to add a new environment variable.
   - Variable name: `NETLIFY_NEXT_PLUGIN_SKIP`
   - Variable value: `false`

   This environment variable ensures that the Netlify Next.js plugin is not skipped during the build process.

   - Create a "New variable" again to add another environment variable.
   - Variable name: `WORDPRESS_URL`
   - Variable value: `<your-wordpress-site-api-url>`

     Replace `<your-wordpress-site-api-url>` with the URL of your headless WordPress site's API endpoint. This variable allows your Next.js application to connect to the correct WordPress API.

By configuring these build settings and environment variables, you can deploy the Shifter Headless Next JS Starter Template to Netlify and ensure the proper integration with your WordPress backend.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it to suit your needs.
