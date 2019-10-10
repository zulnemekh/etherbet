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
/*__ADD_WORKER_SAGA__*/


export function* watchCreateBet() {
  yield takeEvery(actions.createBet, createBet);
}
/*__ADD_WATCHER_SAGA__*/
export default [
  watchCreateBet,
/*__EXPORT_WATCHER_SAGA__*/
];

