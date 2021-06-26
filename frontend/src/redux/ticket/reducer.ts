import { mockFilter, mockTickets, mockStatuses } from './mock';
import { ActionTypes, IFilter, SimpleAction, TicketState } from './types';

const initialState: TicketState = {
  filters: mockFilter,
  tickets: mockTickets,
  statuses: mockStatuses,
  editingTicket: null,
  error: null,
  isLoading: false,
};

export const ticketReducer = (
  state = initialState,
  { type, payload }: SimpleAction
) => {
  switch (type) {
    case ActionTypes.ADD_STATUS:
      return {
        ...state,
        isLoading: true,
        statuses: [...state.statuses, payload.status],
      };

    case ActionTypes.ADD_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

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

    default:
      return state;
  }
};
