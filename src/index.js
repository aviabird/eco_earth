import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
//import promise from 'redux-promise';

import App from './app/app';
import reducers from './store/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory} routes={routes}/>
</Provider>, document.querySelector('.container'));
