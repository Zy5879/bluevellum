import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { LeatherInfo } from "../types/type";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/products" }),
  endpoints: (builder) => ({
    getBags: builder.query({
      query: () => "bags",
    }),
  }),
});
