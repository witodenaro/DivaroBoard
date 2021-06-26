import { ActionTypes, IFilter, SimpleAction, TicketState } from './types';
import { moveDeletedStatusTickets } from './utils';

const initialState: TicketState = {
  filters: {
    title: true,
    description: true,
    assignee: true,
    publishDate: true,
  },
  tickets: [],
  statuses: [],
  editingTicket: null,
  error: null,
  isLoading: false,
};

export const ticketReducer = (
  state = initialState,
  { type, payload }: SimpleAction
) => {
  switch (type) {
    case ActionTypes.FETCH_STATUSES:
    case ActionTypes.FETCH_TICKETS:
    case ActionTypes.ADD_STATUS:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.ADD_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        statuses: [...state.statuses, payload.status],
        error: null,
      };

    case ActionTypes.FETCH_STATUSES_FAILURE:
    case ActionTypes.FETCH_TICKETS_FAILURE:
    case ActionTypes.ADD_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    case ActionTypes.TOGGLE_FILTER_FIELD:
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.field]: !state.filters[payload.field as keyof IFilter],
        },
      };

    case ActionTypes.SET_EDITING_TICKET:
      return {
        ...state,
        editingTicket: payload.ticket,
      };

    case ActionTypes.FETCH_STATUSES_SUCCESS:
      return {
        ...state,
        statuses: payload.statuses,
      };

    case ActionTypes.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: payload.tickets,
      };

    case ActionTypes.UPDATE_TICKET_SUCCESS:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === payload.ticket.id ? payload.ticket : ticket
        ),
      };

    case ActionTypes.CREATE_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, payload.ticket],
      };

    case ActionTypes.DELETE_STATUS_SUCCESS:
      return {
        ...state,
        statuses: state.statuses.filter(
          (status) => status.id !== payload.status.id
        ),
        tickets: moveDeletedStatusTickets(state.tickets, payload.status.type),
      };

    default:
      return state;
  }
};
