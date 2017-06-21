import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../store/reducers';

import createBrowserHistory from 'history/createBrowserHistory';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const history = createBrowserHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Provider>,
    div
  );
});
