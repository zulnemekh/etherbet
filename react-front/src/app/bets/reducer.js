import {handleActions} from 'redux-actions'; 
import * as actions from './actions';
import * as constants from './constants';

export const defaultState = {
  errors: {},
};

export default handleActions({

  [actions.createBet]: (state, action, meta) => ({
    ...state,
    isCreateBetLoading: true,
  }),
  [actions.createBetComplete]: (state, action, meta) => ({
    ...state,
    isCreateBetLoading: false,
  }),
  [actions.createBetError]: (state, action, meta) => ({
    ...state,
    isCreateBetLoading: false,
    errors: {
      ...state.error,
      [constants.CREATE_BET]: action.payload.message
    }
  }),
/*__ADD_ACTION_HANDLER__*/
}, defaultState);