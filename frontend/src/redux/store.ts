import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { productApi } from "./features/productApi";
export const store = configureStore({
  reducer: {
    authUser: authReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
