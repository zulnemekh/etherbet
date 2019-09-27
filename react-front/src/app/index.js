import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from './store';
import Routes from './routes';

const store = configureStore(); 
store.runSaga();


class App extends React.Component {
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
