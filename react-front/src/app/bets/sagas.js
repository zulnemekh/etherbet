import {call, put, select, takeEvery, delay} from 'redux-saga/effects';
import ServiceFactory from "lib/serviceFactory";
import * as actions from './actions';
import * as selectors from './selectors';
import * as constants from './constants';
import * as coreSelectors from './../core/selectors';
import * as helpers from './helpers';


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

export function* takeBet({ payload }) {
  const { accountAddress } = yield select(coreSelectors.getProfile);
  const {bet_id, winner, amount} = payload;
  try {
    const contract = yield call(
      ServiceFactory.call, 
      constants.GET_CONTRACT_URL,
      {}
    );
    const result = contract.methods.takeBet(
      helpers.toHex(bet_id), 
      helpers.toHex(winner)
    ).send({from: accountAddress, value: helpers.toWei(amount)});

    const txHash = yield call(helpers.getPromiEvent, result, 'transactionHash');
    console.log(txHash);
    const receipt = yield call(helpers.getPromiEvent, result, 'receipt');
    console.log(receipt);
    yield put(actions.takeBetComplete(receipt));
  } catch (error) {
    yield put(actions.takeBetError(error));
  }
}
/*__ADD_WORKER_SAGA__*/



export function* watchCreateBet() {
  yield takeEvery(actions.createBet, createBet);
}
export function* watchGetBets() {
  yield takeEvery(actions.getBets, getBets);
}
export function* watchTakeBet() {
  yield takeEvery(actions.takeBet, takeBet);
}
/*__ADD_WATCHER_SAGA__*/
export default [
  watchCreateBet,
  watchGetBets,
  watchTakeBet,
/*__EXPORT_WATCHER_SAGA__*/
];

