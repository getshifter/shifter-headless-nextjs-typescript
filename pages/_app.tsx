import "../styles/main.css";
import { FC } from "react";
import { AppProps } from "next/app";
import Header from "../components/header";
import NextNprogress from "nextjs-progressbar";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <NextNprogress />
      <Header />
      <div>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
      <footer>©︎ {new Date().getFullYear()} Created by DigitalCube</footer>
    </div>
  );
};

export default MyApp;
