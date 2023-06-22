import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return <footer>©︎ {new Date().getFullYear()} Created by <Link href="https://digitalcube.jp">DigitalCube</Link></footer>;
};

export default Footer;
