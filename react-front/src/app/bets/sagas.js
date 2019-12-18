import {call, put, select, takeEvery, take} from 'redux-saga/effects';
import ServiceFactory from "lib/serviceFactory";
import _ from 'lodash';
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
    const receipt = yield call(helpers.getPromiEvent, result, 'receipt');
    yield put(actions.takeBetComplete(receipt));
  } catch (error) {
    yield put(actions.takeBetError(error));
  }
}
export function* getBet({ payload: id }) {
  try {
    let result = yield call(
      ServiceFactory.call, 
      constants.GET_BET_URL,
      id
    );
    result = _.omit(result, [0,1,2,3,4,5,6,7,8,9])
    yield put(actions.getBetComplete(result));
  } catch (error) {
    yield put(actions.getBetError(error));
  }
}
export function* getUserBetOf({ payload: bet_id }) {
  const { accountAddress: address } = yield select(coreSelectors.getProfile);
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.GET_USER_BET_OF_URL,
      {address, bet_id}
    );
    yield put(actions.getUserBetOfComplete(result));
  } catch (error) {
    yield put(actions.getUserBetOfError(error));
  }
}
export function* getUserBetsLength({payload: bet_id}) {
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.GET_USER_BETS_LENGTH_URL,
      {bet_id}
    );
    yield put(actions.getUserBetsLengthComplete(result));
  } catch (error) {
    yield put(actions.getUserBetsLengthError(error));
  }
}
export function* betUserAmountOf({payload: bet_id}) {
  const { accountAddress: address } = yield select(coreSelectors.getProfile);
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.BET_USER_AMOUNT_OF_URL,
      {bet_id, address}
    );
    yield put(actions.betUserAmountOfComplete(result));
  } catch (error) {
    yield put(actions.betUserAmountOfError(error));
  }
}
export function* getTotalAmountOf({payload: bet_id}) {
  try {
    const result = yield call(
      ServiceFactory.call, 
      constants.GET_TOTAL_AMOUNT_OF_URL,
      {bet_id}
    );
    yield put(actions.getTotalAmountOfComplete(result));
  } catch (error) {
    yield put(actions.getTotalAmountOfError(error));
  }
}
export function* betAmountOf({payload: bet_id}) {
  try {
    const result = {};

    result["par1"] = yield call(
      ServiceFactory.call, 
      constants.BET_AMOUNT_OF_URL,
      {bet_id, par: 1}
    );
    result["par2"] = yield call(
      ServiceFactory.call, 
      constants.BET_AMOUNT_OF_URL,
      {bet_id, par: 2}
    );

    yield put(actions.betAmountOfComplete(result));
  } catch (error) {
    yield put(actions.betAmountOfError(error));
  }
}
export function* agreeBetWinner({payload: {id, winner}}) {
  const { accountAddress: from } = yield select(coreSelectors.getProfile);
  try {
    const contract = yield call(
      ServiceFactory.call, 
      constants.GET_CONTRACT_URL,
      {}
    );
    let result = contract.methods.agreeBetWinner(id, winner).send({from});
    const txHash = yield call(helpers.getPromiEvent, result, 'transactionHash');
    const receipt = yield call(helpers.getPromiEvent, result, 'receipt');
    yield put(actions.agreeBetWinnerComplete());
  } catch (error) {
    yield put(actions.agreeBetWinnerError(error));
  }
}
/*__ADD_WORKER_SAGA__*/


export function* watchGetBetComplete() {
  const { payload: { id }} = yield take(actions.getBetComplete);
  yield put(actions.getUserBetOf(id));
  yield put(actions.getUserBetsLength(id));
  yield put(actions.betUserAmountOf(id));
  yield put(actions.getTotalAmountOf(id));
  yield put(actions.betAmountOf(id));
}

export function* watchCreateBet() {
  yield takeEvery(actions.createBet, createBet);
}
export function* watchGetBets() {
  yield takeEvery(actions.getBets, getBets);
}
export function* watchTakeBet() {
  yield takeEvery(actions.takeBet, takeBet);
}
export function* watchGetBet() {
  yield takeEvery(actions.getBet, getBet);
}
export function* watchGetUserBetOf() {
  yield takeEvery(actions.getUserBetOf, getUserBetOf);
}
export function* watchGetUserBetsLength() {
  yield takeEvery(actions.getUserBetsLength, getUserBetsLength);
}
export function* watchBetUserAmountOf() {
  yield takeEvery(actions.betUserAmountOf, betUserAmountOf);
}
export function* watchGetTotalAmountOf() {
  yield takeEvery(actions.getTotalAmountOf, getTotalAmountOf);
}
export function* watchBetAmountOf() {
  yield takeEvery(actions.betAmountOf, betAmountOf);
}
export function* watchAgreeBetWinner() {
  yield takeEvery(actions.agreeBetWinner, agreeBetWinner);
}
/*__ADD_WATCHER_SAGA__*/
export default [
  watchCreateBet,
  watchGetBets,
  watchTakeBet,
  watchGetBet,
  watchGetUserBetOf,
  watchGetUserBetsLength,
  watchGetBetComplete,
  watchBetUserAmountOf,
  watchGetTotalAmountOf,
  watchBetAmountOf,
  watchAgreeBetWinner,
/*__EXPORT_WATCHER_SAGA__*/
];

