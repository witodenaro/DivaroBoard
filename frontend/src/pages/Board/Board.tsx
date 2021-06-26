import { useSelector } from 'react-redux';

import Column from './components/Column';

import {
  selectStatuses,
  selectStructuredTicketsByStatus,
} from '../../redux/ticket/selectors';

const Board = () => {
  const statuses = useSelector(selectStatuses);
  const structuredMockTickets = useSelector(selectStructuredTicketsByStatus);

  return (
    <div className="ml-4 border px-3 h-200 box-border min-w-100% m-auto mt-4 flex justify-start overflow-x-auto">
      {Object.values(statuses).map((status) => (
        <Column
          key={status.type}
          columnTitle={status.title}
          tickets={structuredMockTickets[status.type] || []}
        />
      ))}
    </div>
  );
};

export default Board;
