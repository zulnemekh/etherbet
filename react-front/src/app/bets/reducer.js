import {handleActions} from 'redux-actions'; 
import * as actions from './actions';
import * as constants from './constants';

export const defaultState = {
  errors: {},
  loaders: {},
};

export default handleActions({
  [actions.createBet]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loader,
      [constants.CREATE_BET]: true
    },
  }),
  [actions.createBetComplete]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loader,
      [constants.CREATE_BET]: false
    },
  }),
  [actions.createBetError]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loader,
      [constants.CREATE_BET]: false
    },
    errors: {
      ...state.error,
      [constants.CREATE_BET]: action.payload.message
    }
  }),
  [actions.getBets]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loader,
      [constants.GET_BETS]: true
    },
  }),
  [actions.getBetsComplete]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loader,
      [constants.GET_BETS]: false
    },
    betList: action.payload
  }),
  [actions.getBetsError]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loader,
      [constants.GET_BETS]: false
    },
    errors: {
      ...state.error,
      [constants.GET_BETS]: action.payload.message
    }
  }),
  [actions.takeBet]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.TAKE_BET]: true
    }
  }),
  [actions.takeBetComplete]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.TAKE_BET]: false
    }
  }),
  [actions.takeBetError]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.TAKE_BET]: false
    },
    errors: {
      ...state.error,
      [constants.TAKE_BET]: action.payload.message
    }
  }),
  [actions.txHashReceived]: (state, action, meta) => ({
    ...state,
    txHash: action.payload
  })
/*__ADD_ACTION_HANDLER__*/
}, defaultState);