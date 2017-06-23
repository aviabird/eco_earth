import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './home/Home';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import {shallow,mount} from 'enzyme';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';



import createBrowserHistory from 'history/createBrowserHistory';

const store = configureStore();
const history = createBrowserHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter history={history}>
      <App/>
    </BrowserRouter>
  </Provider>, div);
});

