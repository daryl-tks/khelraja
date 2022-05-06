import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */

export default function (initialState = {}) {
  // Middleware and Enhancers
  const enhancers = [applyMiddleware(sagaMiddleware)];

  // Persisting state
  const persistConfig = {
    key: "suki-dev",
    version: 1,
    storage,
    migrate: (state) => {
      console.log("Migration Running!");
      return Promise.resolve(state);
    },
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  window.devToolsExtension && enhancers.push(window.devToolsExtension());

  const store = createStore(
    persistedReducer,
    initialState,
    compose(...enhancers)
  );

  const persistor = persistStore(store);

  // hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers").default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(sagas);

  return { store, persistor };
}
