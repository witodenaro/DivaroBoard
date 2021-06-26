import { ITicket } from './types';

export const moveDeletedStatusTickets = (
  tickets: ITicket[],
  statusType: string
) => {
  const a = tickets.map((ticket) =>
    ticket.statusType === statusType
      ? {
          ...ticket,
          statusType: 'open',
        }
      : ticket
  );

  return a;
};
