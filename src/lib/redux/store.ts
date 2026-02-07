import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Api } from "./services/Api";

import controlReducer from './slices/controlSlice'


export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
   
    control: controlReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
//export type AppStore = ReturnType<unknown>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const outSideDispatch = store.dispatch;
export const outSideControllState = store.getState().control;

setupListeners(store.dispatch);
