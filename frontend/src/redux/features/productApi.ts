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
    // getBagsGbId: builder.query<LeatherInfo[], string>({
    //   query: (id) => `bags/gentlemanbag/${id}`,
    // }),
    getBagsTote: builder.query<LeatherInfo[], void>({
      query: () => "products/bags/tote",
    }),
    // getBagsToteId: builder.query<LeatherInfo[], string>({
    //   query: (id) => `bags/tote${id}`,
    // }),
    getBagsHb: builder.query<LeatherInfo[], void>({
      query: () => "products/bags/handbag",
    }),
    // getBagsHbId: builder.query<LeatherInfo[], string>({
    //   query: (id) => `bag/handbag/${id}`,
    // }),
    getWallets: builder.query<LeatherInfo[], void>({
      query: () => "products/wallets",
    }),
    // getWalletsId: builder.query<LeatherInfo[], string>({
    //   query: (id) => `wallets/${id}`,
    // }),
    getAccess: builder.query<LeatherInfo[], void>({
      query: () => "products/accessories",
    }),
    getAccessBelt: builder.query<LeatherInfo[], void>({
      query: () => "products/accessories/belt",
    }),
    // getAccessBeltId: builder.query<LeatherInfo[], string>({
    //   query: (id) => `accessories/belt/${id}`,
    // }),
    getAcessWatch: builder.query<LeatherInfo[], void>({
      query: () => "products/accessories/watch",
    }),
    // getAcessWatchId: builder.query<LeatherInfo[], string>({
    //   query: (id) => `accessories/watch/${id}`,
    // }),
    getCustoms: builder.query<LeatherInfo[], void>({
      query: () => "products/customs",
    }),
    // getCustomsId: builder.query<LeatherInfo[], string>({
    //   query: (id) => `customs/${id}`,
    // }),
  }),
});

export const {
  // useGetAccessBeltIdQuery,
  useGetAccessBeltQuery,
  useGetAccessQuery,
  // useGetAcessWatchIdQuery,
  useGetAcessWatchQuery,
  useGetBagGbQuery,
  // useGetBagsGbIdQuery,
  // useGetBagsHbIdQuery,
  useGetBagsHbQuery,
  useGetBagsQuery,
  // useGetBagsToteIdQuery,
  useGetBagsToteQuery,
  // useGetCustomsIdQuery,
  useGetCustomsQuery,
  // useGetWalletsIdQuery,
  useGetWalletsQuery,
  useGetProductIdQuery,
} = productApi;
