import axios from '../../utils/axios';

import { all, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IAddStatus, IUpdateTicket } from './types';
import {
  addStatusFailure,
  addStatusSuccess,
  updateTicketFailure,
  updateTicketSuccess,
} from './actions';

function* addStatus({ payload }: IAddStatus) {
  const { status } = payload;

  const axiosPayload = {
    ...status,
  };

  try {
    const { data } = yield axios.post('/status', axiosPayload);

    yield put(addStatusSuccess());
  } catch (error) {
    yield put(addStatusFailure(error));
  }
}

function* updateTicket({ payload }: IUpdateTicket) {
  const { ticket } = payload;

  const axiosPayload = {
    ...ticket,
  };

  try {
    const { data } = yield axios.put('/ticket', axiosPayload);

    yield put(updateTicketSuccess(data));
  } catch (error) {
    yield put(updateTicketFailure(error));
  }
}

function* watchAddStatus() {
  yield takeLatest(ActionTypes.ADD_STATUS, addStatus);
}

function* watchUpdateTicket() {
  yield takeLatest(ActionTypes.UPDATE_TICKET, updateTicket);
}

export function* ticketSagas() {
  yield all([watchAddStatus(), watchUpdateTicket()]);
}
