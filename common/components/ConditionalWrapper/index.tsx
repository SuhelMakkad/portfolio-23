export type Props = {
  children: React.ReactNode;
  wrapper: (children: React.ReactNode) => JSX.Element;
};
const ConditionalWrapper: React.FC<Props> = ({ wrapper, children }) =>
  wrapper(children);

export default ConditionalWrapper;
