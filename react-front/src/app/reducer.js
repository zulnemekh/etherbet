import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import core from './core';
import bets from './bets';
import user from './user';
/*__IMPORT_MODULE__*/

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
	[core.constants.NAME]: core.reducer,
	[bets.constants.NAME]: bets.reducer,
	[user.constants.NAME]: user.reducer,
/*__IMPORT_REDUCER__*/
})
export default createRootReducer;