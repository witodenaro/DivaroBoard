interface IProps {
  show?: boolean;
  children: React.ReactNode;
  className?: string;
}

const TicketField = ({ className, show, children }: IProps) => {
  return <p className={(show && className) || ''}>{show && children}</p>;
};

export default TicketField;
