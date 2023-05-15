import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LeatherInfo, StripeResponse } from "../../types/type";

export const stripeApi = createApi({
  reducerPath: "stripeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
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
