import axios from '../../utils/axios';

import { all, put, takeLatest } from 'redux-saga/effects';
import {
  ActionTypes,
  IAddStatus,
  ICreateTicket,
  IDeleteStatus,
  IDeleteTicket,
  IStatus,
  IUpdateTicket,
} from './types';
import {
  addStatusFailure,
  addStatusSuccess,
  createTicketFailure,
  createTicketSuccess,
  deleteStatusFailure,
  deleteStatusSuccess,
  deleteTicketFailure,
  deleteTicketSuccess,
  fetchStatusesFailure,
  fetchStatusesSuccess,
  fetchTicketsFailure,
  fetchTicketsSuccess,
  updateTicketFailure,
  updateTicketSuccess,
} from './actions';

function* fetchTickets() {
  try {
    const { data } = yield axios.get('/tickets');

    yield put(fetchTicketsSuccess(data));
  } catch (error) {
    yield put(fetchTicketsFailure(error));
  }
}

function* fetchStatuses() {
  try {
    const { data } = yield axios.get('/statuses');

    yield put(fetchStatusesSuccess(data));
  } catch (error) {
    yield put(fetchStatusesFailure(error));
  }
}

function* createTicket({ payload }: ICreateTicket) {
  const { ticket } = payload;

  const axiosPayload = {
    ...ticket,
  };

  try {
    const { data } = yield axios.post('/tickets', axiosPayload);

    yield put(createTicketSuccess(data));
  } catch (error) {
    yield put(createTicketFailure(error));
  }
}

function* addStatus({ payload }: IAddStatus) {
  const { status } = payload;

  const axiosPayload = {
    ...status,
  };

  try {
    const { data } = yield axios.post('/statuses', axiosPayload);

    yield put(addStatusSuccess(data));
  } catch (error) {
    yield put(addStatusFailure(error));
  }
}

function* updateTicket({ payload }: IUpdateTicket) {
  const { ticket, id } = payload;

  const axiosPayload = {
    ...ticket,
  };

  try {
    const { data } = yield axios.put('/tickets/' + id, axiosPayload);

    yield put(updateTicketSuccess(data));
  } catch (error) {
    yield put(updateTicketFailure(error));
  }
}

function* deleteTicket({ payload }: IDeleteTicket) {
  const { id } = payload;

  try {
    const { data } = yield axios.delete('/tickets/' + id);

    yield put(deleteTicketSuccess(data));
  } catch (error) {
    yield put(deleteTicketFailure(error));
  }
}

function* deleteStatus({ payload }: IDeleteStatus) {
  const { id } = payload;

  try {
    const { data } = yield axios.delete<IStatus>('/statuses/' + id);

    yield put(deleteStatusSuccess(data));
  } catch (error) {
    yield put(deleteStatusFailure(error));
  }
}

function* watchAddStatus() {
  yield takeLatest(ActionTypes.ADD_STATUS, addStatus);
}

function* watchUpdateTicket() {
  yield takeLatest(ActionTypes.UPDATE_TICKET, updateTicket);
}

function* watchCreateTicket() {
  yield takeLatest(ActionTypes.CREATE_TICKET, createTicket);
}

function* watchFetchStatuses() {
  yield takeLatest(ActionTypes.FETCH_STATUSES, fetchStatuses);
}

function* watchFetchTickets() {
  yield takeLatest(ActionTypes.FETCH_TICKETS, fetchTickets);
}

function* watchDeleteTicket() {
  yield takeLatest(ActionTypes.DELETE_TICKET, deleteTicket);
}

function* watchDeleteStatus() {
  yield takeLatest(ActionTypes.DELETE_STATUS, deleteStatus);
}

export function* ticketSagas() {
  yield all([
    watchAddStatus(),
    watchUpdateTicket(),
    watchFetchStatuses(),
    watchFetchTickets(),
    watchCreateTicket(),
    watchDeleteTicket(),
    watchDeleteStatus(),
  ]);
}
