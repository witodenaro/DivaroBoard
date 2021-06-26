export const ActionTypes = {
  TOGGLE_FILTER_FIELD: 'TOGGLE_FILTER_FIELD',

  ADD_STATUS: 'ADD_STATUS',
  ADD_STATUS_FAILURE: 'ADD_STATUS_FAILURE',
  ADD_STATUS_SUCCESS: 'ADD_STATUS_SUCCESS',

  SET_EDITING_TICKET: 'SET_EDITING_TICKET',

  UPDATE_TICKET: 'UPDATE_TICKET',
  UPDATE_TICKET_FAILURE: 'UPDATE_TICKET_FAILURE',
  UPDATE_TICKET_SUCCESS: 'UPDATE_TICKET_SUCCESS',
};

export interface IStatus {
  color: string;
  title: string;
  type: string;
}

export interface ITicket {
  id: number;
  title: string;
  description: string;
  publishDate: Date;
  assignee: string;
  statusType: string;
}

export type IFilter = {
  [key in keyof ITicket]?: boolean;
};

export type IStructuredTickets = {
  [key: string]: ITicket[];
};

export interface SimpleAction {
  type: string;
  payload: any;
}

export interface TicketState {
  filters: IFilter;
  tickets: ITicket[];
  statuses: IStatus[];
  editingTicket: ITicket | null;
  isLoading: boolean;
  error: any | null;
}

export interface IAddStatus {
  type: string;
  payload: {
    status: IStatus;
  };
}

export interface IUpdateTicket {
  type: string;
  payload: {
    ticket: ITicket;
    id: string;
  };
}
