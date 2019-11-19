import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from './store';
import core from 'core';
import Routes from './routes';

const store = configureStore(); 
store.runSaga();

window.store = store;



class App extends React.Component {
  componentDidMount(){
    store.dispatch(
      core.actions.init()
    );
  }
  render () {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
