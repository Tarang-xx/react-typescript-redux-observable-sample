import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import App from './App';
import { applyMiddleware, compose, createStore  } from "redux";
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { reducer } from './users/reducers/index';
import   GetUserEpic  from './users/epics/index';
import { createEpicMiddleware } from "redux-observable";
import { combineEpics } from "redux-observable";
import logger from 'redux-logger'



declare global {
  interface Window { 
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
     }
}

const epics = combineEpics(
  ...GetUserEpic,
);

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middleWare = [logger,epicMiddleware];
const enhancer    = composeEnhancers(  applyMiddleware(...middleWare));
const store = createStore(reducer, enhancer);
epicMiddleware.run(epics);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
