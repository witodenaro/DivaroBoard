import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BoardTicket from './BoardTicket';

import { selectFilters } from '../../../redux/ticket/selectors';
import { ITicket } from '../../../redux/ticket/types';
import { setEditingTicket } from '../../../redux/ticket/actions';

interface IProps {
  columnTitle: string;
  tickets: ITicket[];
}

const Column = ({ columnTitle, tickets }: IProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const filter = useSelector(selectFilters);

  return (
    <section className="w-60 flex-shrink-0 flex flex-col items-center">
      <p className="text-xl">{columnTitle}</p>
      {tickets.map((ticket) => {
        const moveToTicketEdit = () => {
          history.push('/edit/' + ticket.id);
          dispatch(setEditingTicket(ticket));
        };

        return (
          <BoardTicket
            key={ticket.id}
            ticket={ticket}
            filter={filter}
            onTicketClick={moveToTicketEdit}
          />
        );
      })}
    </section>
  );
};

export default Column;
