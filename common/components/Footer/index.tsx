import LinkWithUnderline from "../LinkWithUnderline";
import { AiOutlineArrowUp } from "../Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 flex items-center justify-between pb-4">
      <span>
        Design & Coded by{" "}
        <LinkWithUnderline
          target="_blank"
          href="https://github.com/SuhelMakkad"
        >
          Suhel Makkad
        </LinkWithUnderline>
      </span>

      <a href={"#into"} className="flex items-center gap-2">
        Back to top
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
