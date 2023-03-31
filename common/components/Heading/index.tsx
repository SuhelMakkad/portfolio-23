export type Props = {
  children: React.ReactNode;
  uppercase?: boolean;
};

const Heading = ({ children, uppercase = false }: Props) => {
  return (
    <h1 className={`text-9xl font-semibold ${uppercase && "uppercase"}`}>
      {children}
    </h1>
  );
};

export default Heading;
