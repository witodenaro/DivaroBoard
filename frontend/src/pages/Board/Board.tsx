import { useDispatch, useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';

import Column from './components/Column';

import {
  selectStatuses,
  selectStructuredTicketsByStatus,
} from '../../redux/ticket/selectors';
import { useEffect } from 'react';
import { fetchStatuses, fetchTickets } from '../../redux/ticket/actions';

const Board = () => {
  const dispatch = useDispatch();

  const statuses = useSelector(selectStatuses);
  const structuredTickets = useSelector(selectStructuredTicketsByStatus);

  useEffect(() => {
    dispatch(fetchTickets());
    dispatch(fetchStatuses());
  }, [dispatch]);

  return (
    <ScrollContainer className="ml-4 px-3 h-200 box-border min-w-100% m-auto mt-4 flex justify-start overflow-x-auto">
      {Object.values(statuses).map((status) => (
        <Column
          key={status.type}
          status={status}
          tickets={structuredTickets[status.type] || []}
        />
      ))}
    </ScrollContainer>
  );
};

export default Board;
