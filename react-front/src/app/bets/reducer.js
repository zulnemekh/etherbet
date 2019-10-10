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
/*__ADD_ACTION_HANDLER__*/
}, defaultState);