import {handleActions} from 'redux-actions';
import * as actions from './actions';
import * as constants from './constants';

export const defaultState = {
  errors: {},
  loader: {},
  profile: {},
};

export default handleActions({
  [actions.init]: (state, action, meta) => ({
    ...state,
    isInitLoading: true,
  }),
  [actions.initComplete]: (state, action, meta) => ({
    ...state,
    isInitLoading: false,
    profile: action.payload
  }),
  [actions.initError]: (state, action, meta) => ({
    ...state,
    isInitLoading: false,
    errors: {
      ...state.error,
      [constants.INIT]: action.payload.message
    }
  }),
  [actions.unlockMetamask]: (state, action, meta) => ({
    ...state,
    isUnlockMetamaskLoading: true,
  }),
  [actions.unlockMetamaskComplete]: (state, action, meta) => ({
    ...state,
    isUnlockMetamaskLoading: false,
    profile: {
      ...state.profile,
      isMetamaskUnlocked: true,
      accountAddress: action.payload
    }
  }),
  [actions.unlockMetamaskError]: (state, action, meta) => ({
    ...state,
    isUnlockMetamaskLoading: false,
    errors: {
      ...state.error,
      [constants.UNLOCK_METAMASK]: action.payload.message
    }
  }),
  [actions.createBet]: (state, action, meta) => ({
    ...state,
    loader: {
      ...state.error,
      [constants.CREATE_BET]: true
    },
  }),
  [actions.createBetComplete]: (state, action, meta) => ({
    ...state,
    loader: {
      ...state.error,
      [constants.CREATE_BET]: false
    },
  }),
  [actions.createBetError]: (state, action, meta) => ({
    ...state,
    loader: {
      ...state.error,
      [constants.CREATE_BET]: false
    },
    errors: {
      ...state.error,
      [constants.CREATE_BET]: action.payload.message
    }
  }),
  [actions.takeBet]: (state, action, meta) => ({
    ...state,
    loader: {
      ...state.error,
      [constants.TAKE_BET]: true
    },
  }),
  [actions.takeBetComplete]: (state, action, meta) => ({
    ...state,
    loader: {
      ...state.error,
      [constants.TAKE_BET]: false
    },
  }),
  [actions.takeBetError]: (state, action, meta) => ({
    ...state,
    loader: {
      ...state.error,
      [constants.TAKE_BET]: false
    },
    errors: {
      ...state.error,
      [constants.TAKE_BET]: action.payload.message
    }
  }),

/*__ADD_ACTION_HANDLER__*/
}, defaultState);
