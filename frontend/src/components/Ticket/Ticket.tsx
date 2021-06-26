import { MouseEventHandler } from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
  handleClick?: MouseEventHandler<HTMLElement>;
}

const Ticket = ({ children, className, handleClick }: IProps) => {
  const defaultClasses =
    'border rounded-lg p-4 w-44 flex flex-col mt-2 transition transition-all hover:shadow-xl';

  return (
    <article
      onClick={handleClick}
      className={`${defaultClasses} ${className || ''} ${
        handleClick && 'cursor-pointer'
      }`}
    >
      {children}
    </article>
  );
};

export default Ticket;
