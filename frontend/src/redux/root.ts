import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { ticketReducer } from './ticket/reducer';
import { ticketSagas } from './ticket/sagas';

export const rootReducer = combineReducers({
  ticket: ticketReducer,
});

export function* rootSaga() {
  yield all([ticketSagas()]);
}
