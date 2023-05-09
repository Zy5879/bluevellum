import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItems, LeatherInfo } from "../../types/type";
import { LoginResponse } from "../../types/type";

interface AuthState {
  user: LoginResponse | null | undefined;
  token: string | null | undefined | Request;
  shoppingcart: CartItems | null | undefined;
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
      action: PayloadAction<{ shoppingcart: CartItems | null | undefined }>
    ) => {
      state.shoppingcart = action.payload.shoppingcart;
    },
  },
});

export const { logout, setUser, setCart } = authSlice.actions;

// export const setCurrentUser = (credentials: object) => {
//   return async (dispatch) => {
//     const user = await loginService.login(credentials);
//     dispatch(setUser(credentials));
//   }
// }
export default authSlice.reducer;
