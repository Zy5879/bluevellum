import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LeatherInfo } from "../../types/type";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getBags: builder.query<LeatherInfo[], undefined>({
      query: () => "bags",
    }),
    getBageGb: builder.query<LeatherInfo[], undefined>({
      query: () => "bags/gentleman",
    }),
    getBagsGbId: builder.query<LeatherInfo[], string>({
      query: (id) => `bags/gentlemanbag/${id}`,
    }),
    getBagsTote: builder.query<LeatherInfo[], undefined>({
      query: () => "bags/tote",
    }),
    getBagsToteId: builder.query<LeatherInfo[], string>({
      query: (id) => `bags/tote${id}`,
    }),
    getBagsHb: builder.query<LeatherInfo[], undefined>({
      query: () => "bags/handbag",
    }),
    getBagsHbId: builder.query<LeatherInfo[], string>({
      query: (id) => `bag/handbag/${id}`,
    }),
    getWallets: builder.query<LeatherInfo[], undefined>({
      query: () => "wallets",
    }),
    getWalletsId: builder.query<LeatherInfo[], string>({
      query: (id) => `wallets/${id}`,
    }),
    getAccess: builder.query<LeatherInfo[], undefined>({
      query: () => "accessories",
    }),
    getAccessBelt: builder.query<LeatherInfo[], undefined>({
      query: () => "accessories/belt",
    }),
    getAccessBeltId: builder.query<LeatherInfo[], string>({
      query: (id) => `accessories/belt/${id}`,
    }),
    getAcessWatch: builder.query<LeatherInfo[], undefined>({
      query: () => "accessories/watch",
    }),
    getAcessWatchId: builder.query<LeatherInfo[], string>({
      query: (id) => `accessories/watch/${id}`,
    }),
    getCustoms: builder.query<LeatherInfo[], undefined>({
      query: () => "customs",
    }),
    getCustomsId: builder.query<LeatherInfo[], string>({
      query: (id) => `customs/${id}`,
    }),
  }),
});

export const {
  useGetAccessBeltIdQuery,
  useGetAccessBeltQuery,
  useGetAccessQuery,
  useGetAcessWatchIdQuery,
  useGetAcessWatchQuery,
  useGetBageGbQuery,
  useGetBagsGbIdQuery,
  useGetBagsHbIdQuery,
  useGetBagsHbQuery,
  useGetBagsQuery,
  useGetBagsToteIdQuery,
  useGetBagsToteQuery,
  useGetCustomsIdQuery,
  useGetCustomsQuery,
  useGetWalletsIdQuery,
  useGetWalletsQuery,
} = productApi;
