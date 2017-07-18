import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './assets/scss/index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './store/cofigureStore';
import App from './app/App';

import * as firebase from 'firebase';

// adding rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';

var config = {
    apiKey: "AIzaSyCeSSfTO7a3moD2_qfStsiYZk36TQBe1zw",
    authDomain: "eco-earth-b0911.firebaseapp.com",
    databaseURL: "https://eco-earth-b0911.firebaseio.com",
    projectId: "eco-earth-b0911",
    storageBucket: "eco-earth-b0911.appspot.com",
    messagingSenderId: "1043499852389"
  };

firebase.initializeApp(config);
export const database = firebase.database; 

const store = configureStore();

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


