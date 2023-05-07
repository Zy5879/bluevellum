import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginResponse, LoginRequest, SignUpRequest } from "../../types/type";
// import { setUser } from "./authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    checkLogin: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    signUp: builder.mutation<void, SignUpRequest>({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCheckLoginMutation, useSignUpMutation } = authApi;
