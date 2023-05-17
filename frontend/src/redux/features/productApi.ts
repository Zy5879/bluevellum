import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LeatherInfo } from "../../types/type";

export const productApi = createApi({
  reducerPath: "productApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  baseQuery: fetchBaseQuery({ baseUrl: "https://blue-vellum.onrender.com/" }),
  // baseQuery: fetchBaseQuery({ baseUrl: `${process.env.BACKEND_URL}/` }),
  endpoints: (builder) => ({
    getBags: builder.query<LeatherInfo[], void>({
      query: () => "products/bags",
    }),
    getBagGb: builder.query<LeatherInfo[], void>({
      query: () => "products/bags/gentleman",
    }),
    getProductId: builder.query<LeatherInfo, string>({
      query: (id) => `products/item/${id}`,
    }),

    getBagsTote: builder.query<LeatherInfo[], void>({
      query: () => "products/bags/tote",
    }),

    getBagsHb: builder.query<LeatherInfo[], void>({
      query: () => "products/bags/handbag",
    }),

    getWallets: builder.query<LeatherInfo[], void>({
      query: () => "products/wallets",
    }),

    getAccess: builder.query<LeatherInfo[], void>({
      query: () => "products/accessories",
    }),
    getAccessBelt: builder.query<LeatherInfo[], void>({
      query: () => "products/accessories/belt",
    }),

    getAcessWatch: builder.query<LeatherInfo[], void>({
      query: () => "products/accessories/watch",
    }),
    getCustoms: builder.query<LeatherInfo[], void>({
      query: () => "products/customs",
    }),
  }),
});

export const {
  useGetAccessBeltQuery,
  useGetAccessQuery,
  useGetAcessWatchQuery,
  useGetBagGbQuery,
  useGetBagsHbQuery,
  useGetBagsQuery,
  useGetBagsToteQuery,
  useGetCustomsQuery,
  useGetWalletsQuery,
  useGetProductIdQuery,
} = productApi;
