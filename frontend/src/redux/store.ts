import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { productApi } from "./features/productApi";
import { authApi } from "./features/authApi";
export const store = configureStore({
  reducer: {
    authUser: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
