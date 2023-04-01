export type Props = {
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  capitalized?: boolean;
  uppercase?: boolean;
  dir?: "start" | "end";
};

const Heading = ({
  children,
  tag = "h1",
  uppercase = false,
  capitalized = false,
  dir = "start",
}: Props) => {
  const Tag = tag;
  return (
    <header>
      <Tag
        className={`text-8xl font-semibold ${uppercase ? "uppercase" : ""} ${
          capitalized ? "capitalize" : ""
        } ${dir === "end" ? "text-end" : ""}`}
      >
        {children}
      </Tag>
    </header>
  );
};

export default Heading;
