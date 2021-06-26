import { createSelector, defaultMemoize } from 'reselect';

import { IState } from '../types';
import { IStructuredTickets } from './types';

const selectTicketState = (state: IState) => state.ticket;

export const selectTickets = createSelector(
  selectTicketState,
  (state) => state.tickets
);

export const selectFilters = createSelector(
  selectTicketState,
  (state) => state.filters
);

export const selectStatuses = createSelector(
  selectTicketState,
  (state) => state.statuses
);

export const selectStructuredTicketsByStatus = createSelector(
  selectTickets,
  (tickets) =>
    tickets.reduce((prev, ticket) => {
      const { statusType } = ticket;

      if (!prev[statusType]) prev[statusType] = [];

      prev[statusType].push(ticket);

      return prev;
    }, {} as IStructuredTickets)
);

export const selectEditingTicket = createSelector(
  selectTicketState,
  (state) => state.editingTicket
);

export const selectStatusByType = defaultMemoize((type: string) =>
  createSelector(selectStatuses, (statuses) =>
    statuses.find((status) => status.type === type)
  )
);
