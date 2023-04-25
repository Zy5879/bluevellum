// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// export const productsApi = createApi({
//   reducerPath: "productsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/products" }),
//   endpoints: (builder) => ({
//     getBags: builder.query({
//       query: () => "bags",
//     }),
//   }),
// });

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/type";

interface AuthState {
  user?: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: () => initialState,
    userInfo: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { logout, userInfo } = authSlice.actions;
export default authSlice.reducer;
