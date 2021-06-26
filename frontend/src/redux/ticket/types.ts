export const ActionTypes = {
  TOGGLE_FILTER_FIELD: 'TOGGLE_FILTER_FIELD',

  ADD_STATUS: 'ADD_STATUS',
  ADD_STATUS_FAILURE: 'ADD_STATUS_FAILURE',
  ADD_STATUS_SUCCESS: 'ADD_STATUS_SUCCESS',

  SET_EDITING_TICKET: 'SET_EDITING_TICKET',

  UPDATE_TICKET: 'UPDATE_TICKET',
  UPDATE_TICKET_FAILURE: 'UPDATE_TICKET_FAILURE',
  UPDATE_TICKET_SUCCESS: 'UPDATE_TICKET_SUCCESS',

  CREATE_TICKET: 'CREATE_TICKET',
  CREATE_TICKET_FAILURE: 'CREATE_TICKET_FAILURE',
  CREATE_TICKET_SUCCESS: 'CREATE_TICKET_SUCCESS',

  DELETE_TICKET: 'DELETE_TICKET',
  DELETE_TICKET_FAILURE: 'DELETE_TICKET_FAILURE',
  DELETE_TICKET_SUCCESS: 'DELETE_TICKET_SUCCESS',

  DELETE_STATUS: 'DELETE_STATUS',
  DELETE_STATUS_FAILURE: 'DELETE_STATUS_FAILURE',
  DELETE_STATUS_SUCCESS: 'DELETE_STATUS_SUCCESS',

  FETCH_TICKETS: 'FETCH_TICKETS',
  FETCH_TICKETS_FAILURE: 'FETCH_TICKETS_FAILURE',
  FETCH_TICKETS_SUCCESS: 'FETCH_TICKETS_SUCCESS',

  FETCH_STATUSES: 'FETCH_STATUSES',
  FETCH_STATUSES_FAILURE: 'FETCH_STATUSES_FAILURE',
  FETCH_STATUSES_SUCCESS: 'FETCH_STATUSES_SUCCESS',
};

export interface IStatus {
  id?: string;
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
    ticket: Partial<ITicket>;
    id: string;
  };
}

export interface ICreateTicket {
  type: string;
  payload: {
    ticket: Partial<ITicket>;
  };
}

export interface IDeleteTicket {
  type: string;
  payload: {
    id: string;
  };
}

export interface IDeleteStatus {
  type: string;
  payload: {
    id: string;
  };
}
