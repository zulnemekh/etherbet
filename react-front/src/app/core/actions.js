import { createAction } from 'redux-actions';
import * as types from "./actionTypes";

export const init = createAction(types.INIT_BEGIN, value => value);
export const initComplete = createAction(types.INIT_COMPLETE, value => value);
export const initError = createAction(types.INIT_ERROR, value => value);
export const unlockMetamask = createAction(types.UNLOCK_METAMASK_BEGIN, value => value);
export const unlockMetamaskComplete = createAction(types.UNLOCK_METAMASK_COMPLETE, value => value);
export const unlockMetamaskError = createAction(types.UNLOCK_METAMASK_ERROR, value => value);
/*__ADD_ACTION_CREATOR__*/