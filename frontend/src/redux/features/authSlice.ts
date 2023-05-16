import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LeatherInfo } from "../../types/type";
import { LoginResponse } from "../../types/type";

interface AuthState {
  user: LoginResponse | null | undefined;
  token: string | null | undefined | Request;
  shoppingcart: LeatherInfo[] | null | undefined;
}

const initialState: AuthState = {
  user: null,
  token: null,
  shoppingcart: null,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (
      state,
      action: PayloadAction<{
        user: LoginResponse | undefined;
        token: string | undefined | Request;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setCart: (
      state,
      action: PayloadAction<{ shoppingcart: LeatherInfo[] | null | undefined }>
    ) => {
      state.shoppingcart = action.payload.shoppingcart;
    },
  },
});

export const { logout, setUser, setCart } = authSlice.actions;

export default authSlice.reducer;
