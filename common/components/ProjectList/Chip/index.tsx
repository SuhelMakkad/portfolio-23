import OptionalLink from "@/components/OptionalLink";

export type Props = {
  label: string;
  href?: string;
};

const Chip = ({ href, label }: Props) => {
  return (
    <OptionalLink
      href={href}
      className={`relative outline-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:origin-left after:scale-x-0 after:bg-zinc-600 after:transition-transform dark:after:bg-zinc-400 ${
        href ? "hover:after:scale-x-100 focus:after:scale-x-100" : ""
      }`}
    >
      {label}
    </OptionalLink>
  );
};

export default Chip;
