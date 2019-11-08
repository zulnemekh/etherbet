import {call, put, select, takeEvery} from 'redux-saga/effects';
import ServiceFactory from "lib/serviceFactory";
import * as actions from './actions';
import * as selectors from './selectors';
import * as constants from './constants';


export function* init() {
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
/*__ADD_WORKER_SAGA__*/



export function* watchInit() {
  yield takeEvery(actions.init, init);
}
export function* watchUnlockMetamask() {
  yield takeEvery(actions.unlockMetamask, unlockMetamask);
}
/*__ADD_WATCHER_SAGA__*/
export default [
  watchInit,
  watchUnlockMetamask,
/*__EXPORT_WATCHER_SAGA__*/
];

