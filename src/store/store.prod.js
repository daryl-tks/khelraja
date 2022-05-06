import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */

export default function (initialState = {}) {
  // Middleware and Enhancers
  const enhancers = [applyMiddleware(sagaMiddleware)];

  // Persisting state
  const persistConfig = {
    key: "mysuki",
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    compose(...enhancers)
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  return { store, persistor };
}
