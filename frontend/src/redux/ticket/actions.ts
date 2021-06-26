import {
  ActionTypes,
  IAddStatus,
  ICreateTicket,
  IDeleteStatus,
  IDeleteTicket,
  IStatus,
  ITicket,
  IUpdateTicket,
} from './types';

export const toggleFilterField = (field: string) => ({
  type: ActionTypes.TOGGLE_FILTER_FIELD,
  payload: {
    field,
  },
});

export const addStatus = (status: IStatus): IAddStatus => ({
  type: ActionTypes.ADD_STATUS,
  payload: {
    status,
  },
});

export const addStatusSuccess = (status: IStatus) => ({
  type: ActionTypes.ADD_STATUS_SUCCESS,
  payload: {
    status,
  },
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

export const updateTicket = (
  id: string,
  ticket: Partial<ITicket>
): IUpdateTicket => ({
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

export const deleteTicket = (id: string): IDeleteTicket => ({
  type: ActionTypes.DELETE_TICKET,
  payload: {
    id,
  },
});

export const deleteTicketSuccess = (id: string) => ({
  type: ActionTypes.DELETE_TICKET_SUCCESS,
  payload: {
    id,
  },
});

export const deleteTicketFailure = (error: any) => ({
  type: ActionTypes.DELETE_TICKET_FAILURE,
  payload: {
    error,
  },
});

export const deleteStatus = (id: string): IDeleteStatus => ({
  type: ActionTypes.DELETE_STATUS,
  payload: {
    id,
  },
});

export const deleteStatusSuccess = (status: IStatus) => ({
  type: ActionTypes.DELETE_STATUS_SUCCESS,
  payload: {
    status,
  },
});

export const deleteStatusFailure = (error: any) => ({
  type: ActionTypes.DELETE_STATUS_FAILURE,
  payload: {
    error,
  },
});

export const createTicket = (ticket: Partial<ITicket>): ICreateTicket => ({
  type: ActionTypes.CREATE_TICKET,
  payload: {
    ticket,
  },
});

export const createTicketSuccess = (ticket: ITicket) => ({
  type: ActionTypes.CREATE_TICKET_SUCCESS,
  payload: {
    ticket,
  },
});

export const createTicketFailure = (error: any) => ({
  type: ActionTypes.CREATE_TICKET_FAILURE,
  payload: {
    error,
  },
});

export const fetchStatuses = () => ({
  type: ActionTypes.FETCH_STATUSES,
});

export const fetchStatusesSuccess = (statuses: IStatus[]) => ({
  type: ActionTypes.FETCH_STATUSES_SUCCESS,
  payload: {
    statuses,
  },
});

export const fetchStatusesFailure = (error: any) => ({
  type: ActionTypes.FETCH_STATUSES_FAILURE,
  payload: {
    error,
  },
});

export const fetchTickets = () => ({
  type: ActionTypes.FETCH_TICKETS,
});

export const fetchTicketsSuccess = (tickets: ITicket[]) => ({
  type: ActionTypes.FETCH_TICKETS_SUCCESS,
  payload: {
    tickets,
  },
});

export const fetchTicketsFailure = (error: any) => ({
  type: ActionTypes.FETCH_TICKETS_FAILURE,
  payload: {
    error,
  },
});
