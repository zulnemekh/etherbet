import { createAction } from 'redux-actions';
import * as types from "./actionTypes";

export const getMyBets = createAction(types.GET_MY_BETS_BEGIN, value => value);
export const getMyBetsComplete = createAction(types.GET_MY_BETS_COMPLETE, value => value);
export const getMyBetsError = createAction(types.GET_MY_BETS_ERROR, value => value);
/*__ADD_ACTION_CREATOR__*/