import { ActionTypes, IStatus, ITicket } from './types';

export const toggleFilterField = (field: string) => ({
  type: ActionTypes.TOGGLE_FILTER_FIELD,
  payload: {
    field,
  },
});

export const addStatus = (status: IStatus) => ({
  type: ActionTypes.ADD_STATUS,
  payload: {
    status,
  },
});

export const addStatusSuccess = () => ({
  type: ActionTypes.ADD_STATUS_SUCCESS,
});

export const addStatusFailure = (error: any) => ({
  type: ActionTypes.ADD_STATUS_FAILURE,
  payload: {
    error,
  },
});

export const setEditingTicket = (ticket: ITicket) => ({
  type: ActionTypes.SET_EDITING_TICKET,
  payload: {
    ticket,
  },
});

export const updateTicket = (id: string, ticket: Partial<ITicket>) => ({
  type: ActionTypes.UPDATE_TICKET,
  payload: {
    ticket,
    id,
  },
});

export const updateTicketSuccess = (ticket: ITicket) => ({
  type: ActionTypes.UPDATE_TICKET_SUCCESS,
  payload: {
    ticket,
  },
});

export const updateTicketFailure = (error: any) => ({
  type: ActionTypes.UPDATE_TICKET_FAILURE,
  payload: {
    error,
  },
});
