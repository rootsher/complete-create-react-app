import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import HotWire from 'hot-wire';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// modules:
import { module as coreModule } from './app/core/core.module';

import App from './app/routing.component';
import registerServiceWorker from './registerServiceWorker';

const { rootReducer, services: coreServices } = coreModule();

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const container = new HotWire().wire({
  services: {
    ...coreServices
  }
});

container.then(services => {
  const middlewares = [
    routerMiddleware(history),
    thunkMiddleware.withExtraArgument({ services })
  ];

  if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');

    middlewares.push(createLogger());
  }

  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(applyMiddleware(...middlewares))
  );

  const render = Component =>
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root')
    );

  render(App);

  if (module.hot) {
    module.hot.accept('./app/routing.component', () =>
      render(require('./app/routing.component').default)
    );
    module.hot.accept('./app/core/reducers/root.reducer', () => {
      store.replaceReducer(connectRouter(history)(rootReducer));
    });
  }

  registerServiceWorker();
});
