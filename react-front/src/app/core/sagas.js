import {call, put, select, takeEvery} from 'redux-saga/effects';
import ServiceFactory from "lib/serviceFactory";
import * as actions from './actions';
import * as selectors from './selectors';
import * as constants from './constants';


export function* init({payload}) {
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.INIT_URL,
      {}
    );
    yield put(actions.initComplete(result));
  } catch (error) {
    yield put(actions.initError(error));
  }
}
export function* unlockMetamask() {
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.UNLOCK_METAMASK_URL,
      {}
    );
    yield put(actions.unlockMetamaskComplete(result[0]));
  } catch (error) {
    yield put(actions.unlockMetamaskError(error));
  }
}
export function* createBet({ payload }) {
  const {accountAddress: from} = yield select(selectors.getProfile)
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.CREATE_BET_URL,
      {params: payload, from}
    );
    yield put(actions.createBetComplete(result));
  } catch (error) {
    yield put(actions.createBetError(error));
  }
}
/*__ADD_WORKER_SAGA__*/




export function* watchInit() {
  yield takeEvery(actions.init, init);
}
export function* watchUnlockMetamask() {
  yield takeEvery(actions.unlockMetamask, unlockMetamask);
}
export function* watchCreateBet() {
  yield takeEvery(actions.createBet, createBet);
}
/*__ADD_WATCHER_SAGA__*/
export default [
  watchInit,
  watchUnlockMetamask,
  watchCreateBet,
/*__EXPORT_WATCHER_SAGA__*/
];

