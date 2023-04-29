// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // import { CartItems } from "../../types/type";
// import { RootState } from "../store";
// // import { useAppSelector } from "../hooks";
// import { User } from "../../types/type";

// export const cartApi = createApi({
//   reducerPath: "cartApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3000",
//     prepareHeaders: (headers) => {
//       const token = (state: RootState) => state.authUser.token;
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getShoppingCart: builder.query<User, void>({
//       query: () => "/",
//     }),
//   }),
// });

// export const { useGetShoppingCartQuery } = cartApi;
