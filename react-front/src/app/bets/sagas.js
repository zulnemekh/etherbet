import {call, put, select, takeEvery} from 'redux-saga/effects';
import ServiceFactory from "lib/serviceFactory";
import * as actions from './actions';
import * as selectors from './selectors';
import * as constants from './constants';


export function* createBet(action) {
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.CREATE_BET_URL,
      action.payload
    );
    yield put(actions.createBetComplete(result));
  } catch (error) {
    yield put(actions.createBetError(error));
  }
}
/*__ADD_WORKER_SAGA__*/


export function* watchCreateBet() {
  yield takeEvery(actions.createBet, createBet);
}
/*__ADD_WATCHER_SAGA__*/
export default [
    watchCreateBet,
/*__EXPORT_WATCHER_SAGA__*/
];

