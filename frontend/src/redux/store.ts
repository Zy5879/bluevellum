import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { productApi } from "./features/productApi";
import { authApi } from "./features/authApi";
import { stripeApi } from "./features/stripeApi";
export const store = configureStore({
  reducer: {
    authUser: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [stripeApi.reducerPath]: stripeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      authApi.middleware,
      stripeApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
