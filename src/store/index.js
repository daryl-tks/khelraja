import DevStore from "./store.dev";
import ProdStore from "./store.prod";

let store = null;

if (process.env.REACT_APP_NODE_ENV === "development") {
  store = DevStore();
} else {
  store = ProdStore();
}

export default store;
