import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LeatherInfo, StripeResponse } from "../../types/type";

export const stripeApi = createApi({
  reducerPath: "stripeApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://blue-vellum.onrender.com" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  // baseQuery: fetchBaseQuery({ baseUrl: `${process.env.BACKEND_URL}/` }),
  endpoints: (builder) => ({
    checkout: builder.mutation<StripeResponse, LeatherInfo[] | undefined>({
      query: (data) => ({
        url: "/stripe/checkout",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCheckoutMutation } = stripeApi;
