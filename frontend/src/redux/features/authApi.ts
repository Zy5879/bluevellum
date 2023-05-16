import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginResponse,
  LoginRequest,
  SignUpRequest,
  // ProductInfo,
  User,
  // Cart,
  ProductItem,
  LeatherInfo,
  // DeleteProductItem,
} from "../../types/type";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
      const loggedUser = window.localStorage.getItem("loggedInUser");
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
    addToCart: builder.mutation<void, ProductItem>({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    updateCart: builder.mutation<void, ProductItem>({
      query: (data) => ({
        url: "/cart",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    deleteFromCart: builder.mutation<void, LeatherInfo>({
      query: (data) => ({
        url: "/cart",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    // checkoutSucces: builder.query<User, void>({
    //   query: () => "/checkout-success/:id",
    // }),
    // }),
    // checkout: builder.mutation<string, Partial<StripeItems>>({
    //   query: (data) => ({
    //     url: "/stripe/checkout",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useCheckLoginMutation,
  useSignUpMutation,
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteFromCartMutation,
  // useCheckoutSuccesQuery,
  // useCheckoutMutation,
} = authApi;
