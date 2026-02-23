import { configureStore } from "@reduxjs/toolkit";
import { APISevice } from "../services/API.Service";
import userReducer from "./reducers/user";

export const store = configureStore({
  reducer: {
    [APISevice.reducerPath]: APISevice.reducer,
    user: userReducer
  },
  middleware: (gDM) => gDM().concat(APISevice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
