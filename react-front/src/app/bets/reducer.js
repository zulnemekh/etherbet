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
  }),
  [actions.getBet]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_BET]: true
    }
  }),
  [actions.getBetComplete]: (state, action, meta) => ({
    ...state,
    selectedBet: action.payload,
    loaders: {
      ...state.loaders,
      [constants.GET_BET]: false
    }
  }),
  [actions.getBetError]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_BET]: false
    },
    errors: {
      ...state.error,
      [constants.GET_BET]: action.payload.message
    }
  }),
  [actions.getUserBetOf]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_USER_BET_OF]: true
    }
  }),
  [actions.getUserBetOfComplete]: (state, action, meta) => ({
    ...state,
    selectedBet: {
      ...state.selectedBet,
      userBetOf: action.payload
    },  
    loaders: {
      ...state.loaders,
      [constants.GET_USER_BET_OF]: false
    }
  }),
  [actions.getUserBetOfError]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_USER_BET_OF]: false
    },
    errors: {
      ...state.error,
      [constants.GET_USER_BET_OF]: action.payload.message
    }
  }),
  [actions.getUserBetsLength]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_USER_BETS_LENGTH]: true
    }
  }),
  [actions.getUserBetsLengthComplete]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_USER_BETS_LENGTH]: false
    }
  }),
  [actions.getUserBetsLengthError]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_USER_BETS_LENGTH]: false
    },
    errors: {
      ...state.error,
      [constants.GET_USER_BETS_LENGTH]: action.payload.message
    }
  }),
  [actions.betUserAmountOf]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.BET_USER_AMOUNT_OF]: true
    }
  }),
  [actions.betUserAmountOfComplete]: (state, action, meta) => ({
    ...state,
    selectedBet: {
      ...state.selectedBet,
      userAmountOf: action.payload
    },
    loaders: {
      ...state.loaders,
      [constants.BET_USER_AMOUNT_OF]: false
    }
  }),
  [actions.betUserAmountOfError]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.BET_USER_AMOUNT_OF]: false
    },
    errors: {
      ...state.error,
      [constants.BET_USER_AMOUNT_OF]: action.payload.message
    }
  }),
  [actions.getTotalAmountOf]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_TOTAL_AMOUNT_OF]: true
    }
  }),
  [actions.getTotalAmountOfComplete]: (state, action, meta) => ({
    ...state,
    selectedBet: {
      ...state.selectedBet,
      totalAmount: action.payload
    },  
    loaders: {
      ...state.loaders,
      [constants.GET_TOTAL_AMOUNT_OF]: false
    }
  }),
  [actions.getTotalAmountOfError]: (state, action, meta) => ({
    ...state,
    loaders: {
      ...state.loaders,
      [constants.GET_TOTAL_AMOUNT_OF]: false
    },
    errors: {
      ...state.error,
      [constants.GET_TOTAL_AMOUNT_OF]: action.payload.message
    }
  }),
/*__ADD_ACTION_HANDLER__*/
}, defaultState);