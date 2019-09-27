import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
/*__IMPORT_MODULE__*/

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
/*__IMPORT_REDUCER__*/
})
export default createRootReducer;