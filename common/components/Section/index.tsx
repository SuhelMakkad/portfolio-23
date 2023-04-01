export type Props = {
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  uppercase?: boolean;
};

const Section = ({ children, uppercase = false, tag = "h1" }: Props) => {
  return <section>{children}</section>;
};

export default Section;
