import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import createRootReducer from './reducer';
import sagas from './sagas';

export const history = createBrowserHistory();
export default (initialState={}, additionalMiddleware = [], composeFunc = compose) => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware].concat(additionalMiddleware);
  const store = createStore(
    createRootReducer(history),
    initialState, 
    composeFunc(applyMiddleware(...middleware))
  );
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(nextRootReducer);
    })
  }
  store.runSaga = () => sagaMiddleware.run(sagas);
  return store;
};