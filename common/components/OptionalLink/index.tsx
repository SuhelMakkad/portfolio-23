import Link from "next/link";
import ConditionalWrapper from "../ConditionalWrapper";

export type Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

const OptionalLink = ({ children, href, className }: Props) => {
  const commonProps = { className };

  return (
    <ConditionalWrapper
      wrapper={(children) =>
        href ? (
          <Link href={href} {...commonProps}>
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
