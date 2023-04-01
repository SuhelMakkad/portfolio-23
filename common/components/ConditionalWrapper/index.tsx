export type Props = {
  children: React.ReactElement;
  wrapper: (children: React.ReactElement) => JSX.Element;
};
const ConditionalWrapper: React.FC<Props> = ({ wrapper, children }) =>
  wrapper(children);

export default ConditionalWrapper;
