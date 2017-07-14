import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./assets/scss/index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import createBrowserHistory from "history/createBrowserHistory";
import configureStore from "./store/configureStore";
import App from "./app/App";
import * as firebase from 'firebase';

// adding rx operators

const store = configureStore();

const history = createBrowserHistory();
var config = {
  apiKey: "AIzaSyBoRtTjxHckAej9ROeGbTzRxN_reDsAufY",
  authDomain: "ecoearth-afcd3.firebaseapp.com",
  databaseURL: "https://ecoearth-afcd3.firebaseio.com",
  projectId: "ecoearth-afcd3",
  storageBucket: "ecoearth-afcd3.appspot.com",
  messagingSenderId: "571704518364"
};
firebase.initializeApp(config);
const database = firebase.database();
export default database;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
