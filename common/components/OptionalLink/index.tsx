import Link from "next/link";
import ConditionalWrapper from "../ConditionalWrapper";
import { HTMLAttributeAnchorTarget } from "react";

export type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
};

const OptionalLink = ({ children, href, target, className }: Props) => {
  const commonProps = { className };

  return (
    <ConditionalWrapper
      wrapper={(children) =>
        href ? (
          <Link
            {...commonProps}
            href={href}
            target={target}
            rel="noopener noreferrer"
          >
            {children}
          </Link>
        ) : (
          <div {...commonProps}>{children}</div>
        )
      }
    >
      {children}
    </ConditionalWrapper>
  );
};

export default OptionalLink;
