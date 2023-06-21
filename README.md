# Shifter Headless Next JS Starter Template

![Shifter Headless Next JS Starter Template](https://cdn.getshifter.co/6979d2c20e0f14c46f6b6eac8659c6136a0b4a67/uploads/2023/03/1-1024x626.png)

This is a starter template for building headless WordPress websites using Next.js and Shifter. It provides a solid foundation for creating fast, scalable, and SEO-friendly websites with a decoupled frontend and WordPress as a headless CMS.

## Features

- Built with Next.js: A powerful and flexible React framework for building modern web applications.
- TypeScript: Type checking and improved developer experience.
- Headless WordPress: Utilize WordPress as a headless CMS to manage content.
- Shifter: Seamless integration with Shifter, a serverless WordPress hosting and deployment platform.
- Scalable architecture: Easily scale your website as your content grows and traffic increases.

## Getting Started

To get started with the Shifter Headless Next JS Starter Template, follow these steps:

1. Clone or download the template from the [GitHub repository](https://github.com/getshifter/headless-example-nextjs-typescript).
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

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it to suit your needs.