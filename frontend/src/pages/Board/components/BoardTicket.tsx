import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-mini';

import Ticket from '../../../components/Ticket/Ticket';
import TicketField from '../../../components/Ticket/TicketField';
import { selectStatusByType } from '../../../redux/ticket/selectors';

import { IFilter, ITicket } from '../../../redux/ticket/types';

interface IProps {
  filter: IFilter;
  ticket: ITicket;
  onTicketClick?: MouseEventHandler<HTMLElement>;
}

const BoardTicket = ({ onTicketClick, ticket, filter }: IProps) => {
  const { statusType, id, title, description, assignee, publishDate } = ticket;

  const status = useSelector(selectStatusByType(statusType));

  return (
    <Ticket
      className={`bg-${status?.color || 'white'}`}
      key={id}
      handleClick={onTicketClick}
    >
      <TicketField className="border-2 border-black" show={filter.title}>
        {title || 'No title'}
      </TicketField>
      <TicketField className="my-4 p-1 border" show={filter.description}>
        {description || 'No description provided'}
      </TicketField>
      <TicketField className="flex flex-col text-s" show={filter.assignee}>
        <span>Assigned:</span>
        <span>{assignee || '-'}</span>
      </TicketField>
      <TicketField className="text-xs mt-auto" show={filter.publishDate}>
        {moment(publishDate).format('DD MMM YYYY')}
      </TicketField>
    </Ticket>
  );
};

export default BoardTicket;
