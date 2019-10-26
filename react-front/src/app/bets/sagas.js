import {call, put, select, takeEvery} from 'redux-saga/effects';
import ServiceFactory from "lib/serviceFactory";
import * as actions from './actions';
import * as selectors from './selectors';
import * as constants from './constants';
import * as coreSelectors from './../core/selectors';


export function* createBet(action) {
  const { accountAddress } = yield select(coreSelectors.getProfile);
  const params = {payload: action.payload, from: accountAddress }
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.CREATE_BET_URL,
      params,
    );
    yield put(actions.createBetComplete(result));
  } catch (error) {
    console.log(error);
    yield put(actions.createBetError(error));
  }
}
export function* getBets() {
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.GET_BETS_URL,
      {}
    );
    yield put(actions.getBetsComplete(result));
  } catch (error) {
    yield put(actions.getBetsError(error));
  }
}
/*__ADD_WORKER_SAGA__*/



export function* watchCreateBet() {
  yield takeEvery(actions.createBet, createBet);
}
export function* watchGetBets() {
  yield takeEvery(actions.getBets, getBets);
}
/*__ADD_WATCHER_SAGA__*/
export default [
  watchCreateBet,
  watchGetBets,
/*__EXPORT_WATCHER_SAGA__*/
];

