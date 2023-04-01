import OptionalLink from "@/components/OptionalLink";
import { HTMLAttributeAnchorTarget } from "react";

export type Props = {
  children: React.ReactNode;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
};

const LinkWithUnderline = ({ href, target, children }: Props) => {
  return (
    <OptionalLink
      href={href}
      target={target}
      className={`relative outline-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[5%] after:origin-left after:scale-x-0 after:bg-zinc-600 after:transition-transform after:duration-200 dark:after:bg-zinc-400 ${
        href ? "hover:after:scale-x-100 focus:after:scale-x-100" : ""
      }`}
    >
      {children}
    </OptionalLink>
  );
};

export default LinkWithUnderline;
