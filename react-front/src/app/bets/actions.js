import { createAction } from 'redux-actions';
import * as types from "./actionTypes";

export const createBet = createAction(types.CREATE_BET_BEGIN, value => value);
export const createBetComplete = createAction(types.CREATE_BET_COMPLETE, value => value);
export const createBetError = createAction(types.CREATE_BET_ERROR, value => value);

export const getBets = createAction(types.GET_BETS_BEGIN, value => value);
export const getBetsComplete = createAction(types.GET_BETS_COMPLETE, value => value);
export const getBetsError = createAction(types.GET_BETS_ERROR, value => value);
export const takeBet = createAction(types.TAKE_BET_BEGIN, value => value);
export const takeBetComplete = createAction(types.TAKE_BET_COMPLETE, value => value);
export const takeBetError = createAction(types.TAKE_BET_ERROR, value => value);
export const txHashReceived = createAction(types.TX_HASH_RECEIVED, value => value);
export const getBet = createAction(types.GET_BET_BEGIN, value => value);
export const getBetComplete = createAction(types.GET_BET_COMPLETE, value => value);
export const getBetError = createAction(types.GET_BET_ERROR, value => value);
export const getUserBetOf = createAction(types.GET_USER_BET_OF_BEGIN, value => value);
export const getUserBetOfComplete = createAction(types.GET_USER_BET_OF_COMPLETE, value => value);
export const getUserBetOfError = createAction(types.GET_USER_BET_OF_ERROR, value => value);
export const getUserBetsLength = createAction(types.GET_USER_BETS_LENGTH_BEGIN, value => value);
export const getUserBetsLengthComplete = createAction(types.GET_USER_BETS_LENGTH_COMPLETE, value => value);
export const getUserBetsLengthError = createAction(types.GET_USER_BETS_LENGTH_ERROR, value => value);
export const betUserAmountOf = createAction(types.BET_USER_AMOUNT_OF_BEGIN, value => value);
export const betUserAmountOfComplete = createAction(types.BET_USER_AMOUNT_OF_COMPLETE, value => value);
export const betUserAmountOfError = createAction(types.BET_USER_AMOUNT_OF_ERROR, value => value);
export const getTotalAmountOf = createAction(types.GET_TOTAL_AMOUNT_OF_BEGIN, value => value);
export const getTotalAmountOfComplete = createAction(types.GET_TOTAL_AMOUNT_OF_COMPLETE, value => value);
export const getTotalAmountOfError = createAction(types.GET_TOTAL_AMOUNT_OF_ERROR, value => value);
export const betAmountOf = createAction(types.BET_AMOUNT_OF_BEGIN, value => value);
export const betAmountOfComplete = createAction(types.BET_AMOUNT_OF_COMPLETE, value => value);
export const betAmountOfError = createAction(types.BET_AMOUNT_OF_ERROR, value => value);
export const agreeBetWinner = createAction(types.AGREE_BET_WINNER_BEGIN, value => value);
export const agreeBetWinnerComplete = createAction(types.AGREE_BET_WINNER_COMPLETE, value => value);
export const agreeBetWinnerError = createAction(types.AGREE_BET_WINNER_ERROR, value => value);
/*__ADD_ACTION_CREATOR__*/