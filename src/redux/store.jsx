import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
const store = configureStore({
    reducer: { 
        [baseApi.reducerPath]: baseApi.reducer,
    },
     // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseApi.middleware),   
});
export default store;