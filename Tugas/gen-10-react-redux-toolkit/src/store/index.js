import { configureStore } from "@reduxjs/toolkit";

import produkReducer from "./produkSlice";

const store = configureStore({
  reducer: {
    produk: produkReducer,
  },
});

export default store;
