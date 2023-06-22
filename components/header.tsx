import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href="https://github.com/getshifter/shifter-headless-nextjs-typescript"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
