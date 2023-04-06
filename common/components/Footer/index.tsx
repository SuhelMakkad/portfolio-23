import LinkWithUnderline from "@/components/LinkWithUnderline";
import { AiOutlineArrowUp } from "@/components/Icons";

import { githubLink } from "@/utils/data";

const Footer = () => {
  return (
    <footer className="mt-20 flex flex-col-reverse items-center justify-between gap-2 pb-4 sm:flex-row">
      <span>
        Design & Coded by{" "}
        <LinkWithUnderline target="_blank" href={githubLink}>
          Suhel Makkad
        </LinkWithUnderline>
      </span>

      <a
        href={"#intro"}
        className="relative flex items-center gap-2 outline-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[5%] after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100 focus:after:scale-x-100 dark:after:bg-current"
      >
        Back to top
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
