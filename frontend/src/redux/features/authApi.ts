import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginResponse,
  LoginRequest,
  SignUpRequest,
  User,
  // LeatherInfo,
  CartItems,
  // CartItems,
  // CartItems,
} from "../../types/type";
// import homeService from "../../services/home";

// import { setUser } from "./authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
      const loggedUser = window.localStorage.getItem("loggedInUser");
      // console.log(loggedUser);
      if (loggedUser) {
        const user = JSON.parse(loggedUser) as LoginResponse;
        headers.set("Authorization", `Bearer ${user.token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    checkLogin: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    signUp: builder.mutation<void, SignUpRequest>({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getCart: builder.query<User, LoginResponse>({
      query: () => "",
      providesTags: ["User"],
    }),
    addToCart: builder.mutation<void, CartItems>({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useCheckLoginMutation,
  useSignUpMutation,
  useGetCartQuery,
  useAddToCartMutation,
} = authApi;
