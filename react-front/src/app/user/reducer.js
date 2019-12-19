import { handleActions } from 'redux-actions';
import * as actions from './actions';
import * as constants from './constants';

const defaultState = {
  errors: {},

  /*__ADD_DEFAULT_STATE__*/
};

export default handleActions({

  [actions.getMyBets]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_MY_BETS]: true
    }
  }),
  [actions.getMyBetsComplete]: (state, action, meta) => ({
    ...state,
    myBets: action.payload,
    loaders: {
      ...state.loaders,
      [constants.GET_MY_BETS]: false
    }
  }),
  [actions.getMyBetsError]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_MY_BETS]: false
    },
    errors: {
      ...state.error,
      [constants.GET_MY_BETS]: action.payload.message
    }
  }),
  /*__ADD_ACTION_HANDLER__*/
}, defaultState);