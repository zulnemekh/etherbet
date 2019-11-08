import { createAction } from 'redux-actions';
import * as types from "./actionTypes";

export const createBet = createAction(types.CREATE_BET_BEGIN, value => value);
export const createBetComplete = createAction(types.CREATE_BET_COMPLETE, value => value);
export const createBetError = createAction(types.CREATE_BET_ERROR, value => value);
export const getBets = createAction(types.GET_BETS_BEGIN, value => value);
export const getBetsComplete = createAction(types.GET_BETS_COMPLETE, value => value);
export const getBetsError = createAction(types.GET_BETS_ERROR, value => value);
/*__ADD_ACTION_CREATOR__*/