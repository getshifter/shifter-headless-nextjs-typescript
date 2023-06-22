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
      <main className="min-h-screen p-6 md:p-24">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <Component {...pageProps} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
