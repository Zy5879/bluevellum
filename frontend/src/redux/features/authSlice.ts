import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/type";
import { LoginResponse } from "../../types/type";

interface AuthState {
  user: LoginResponse | null | undefined;
  token: string | null | undefined | Request;
  cart: User | null | undefined;
}

const initialState: AuthState = {
  user: null,
  token: null,
  cart: null,
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
      action: PayloadAction<{ cart: User | null | undefined }>
    ) => {
      state.cart = action.payload.cart;
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
