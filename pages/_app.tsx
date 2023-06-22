import "../styles/main.css";
import { FC } from "react";
import { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import NextNprogress from "nextjs-progressbar";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <NextNprogress />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
