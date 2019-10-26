import {handleActions} from 'redux-actions'; 
import * as actions from './actions';
import * as constants from './constants';

export const defaultState = {
  errors: {},
  loader: {},
};

export default handleActions({

  [actions.createBet]: (state, action, meta) => ({
    ...state,
    loader: {
      ...state.loader,
      [constants.CREATE_BET]: true
    },
  }),
  [actions.createBetComplete]: (state, action, meta) => ({
    ...state,
    loader: {
      ...state.loader,
      [constants.CREATE_BET]: false
    },
  }),
  [actions.createBetError]: (state, action, meta) => ({
    ...state,
    loader: {
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
    isGetBetsLoading: true,
  }),
  [actions.getBetsComplete]: (state, action, meta) => ({
    ...state,
    isGetBetsLoading: false,
    betList: action.payload
  }),
  [actions.getBetsError]: (state, action, meta) => ({
    ...state,
    isGetBetsLoading: false,
    errors: {
      ...state.error,
      [constants.GET_BETS]: action.payload.message
    }
  }),
/*__ADD_ACTION_HANDLER__*/
}, defaultState);