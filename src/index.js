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
import ENV from "./AppConstants.jsx";
import * as firebase from 'firebase';

// adding rx operators

const store = configureStore();

const history = createBrowserHistory();
var config = {
  apiKey: ENV.FIREBASE.APP_KEY,
  authDomain: ENV.FIREBASE.AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE.DATABASE_URL,
  projectId: ENV.FIREBASE.PROJECT_ID,
  storageBucket: ENV.FIREBASE.STORAGE_BUCKET,
  messagingSenderId: ENV.FIREBASE.MESSAGING_SENDERID
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
