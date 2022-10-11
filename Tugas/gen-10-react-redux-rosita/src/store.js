import { combineReducers, createStore } from "redux";

import orangReducer from "./reducerOrang";
import produkReducer from "./reducerProduk";
import tokoReducer from "./reducerToko";

const rootReducer = combineReducers({
  orang: orangReducer,
  produk: produkReducer,
  toko: tokoReducer,
});

const store = createStore(rootReducer);

export default store;
