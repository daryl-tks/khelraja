import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import Routes from "./routes";
import store from "./store";

import serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker();
