import { FC } from "react";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import Link from "next/link";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <NextNprogress />
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link
                href="https://github.com/getshifter/headless-example-nextjs-typescript"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
      <footer>©︎ 2020 Created by digitalcube</footer>
    </div>
  );
};

export default MyApp;
