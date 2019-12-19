import { call, put, select, takeEvery } from 'redux-saga/effects';
import ServiceFactory from "../../lib/serviceFactory";
import * as actions from './actions';
import * as selectors from './selectors';
import * as constants from './constants';
import * as coreSelectors from './../core/selectors';

export function* getMyBets() {
  const { accountAddress } = yield select(coreSelectors.getProfile);
  try {
    const result = yield call(
      ServiceFactory.call,
      constants.GET_MY_BETS_URL,
      { accountAddress }
    );
    yield put(actions.getMyBetsComplete(result));
  } catch (error) {
    yield put(actions.getMyBetsError(error));
  }
}
/*__ADD_WORKER_SAGA__*/

export function* watchGetMyBets() {
  yield takeEvery(actions.getMyBets, getMyBets);
}
/*__ADD_WATCHER_SAGA__*/
export default [

  watchGetMyBets,
  /*__EXPORT_WATCHER_SAGA__*/
];

