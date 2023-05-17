"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetProductIdQuery = exports.useGetWalletsQuery = exports.useGetCustomsQuery = exports.useGetBagsToteQuery = exports.useGetBagsQuery = exports.useGetBagsHbQuery = exports.useGetBagGbQuery = exports.useGetAcessWatchQuery = exports.useGetAccessQuery = exports.useGetAccessBeltQuery = exports.productApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.productApi = (0, react_1.createApi)({
    reducerPath: "productApi",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: "https://blue-vellum.onrender.com/" }),
    // baseQuery: fetchBaseQuery({ baseUrl: `${process.env.BACKEND_URL}/` }),
    endpoints: (builder) => ({
        getBags: builder.query({
            query: () => "products/bags",
        }),
        getBagGb: builder.query({
            query: () => "products/bags/gentleman",
        }),
        getProductId: builder.query({
            query: (id) => `products/item/${id}`,
        }),
        getBagsTote: builder.query({
            query: () => "products/bags/tote",
        }),
        getBagsHb: builder.query({
            query: () => "products/bags/handbag",
        }),
        getWallets: builder.query({
            query: () => "products/wallets",
        }),
        getAccess: builder.query({
            query: () => "products/accessories",
        }),
        getAccessBelt: builder.query({
            query: () => "products/accessories/belt",
        }),
        getAcessWatch: builder.query({
            query: () => "products/accessories/watch",
        }),
        getCustoms: builder.query({
            query: () => "products/customs",
        }),
    }),
});
exports.useGetAccessBeltQuery = exports.productApi.useGetAccessBeltQuery, exports.useGetAccessQuery = exports.productApi.useGetAccessQuery, exports.useGetAcessWatchQuery = exports.productApi.useGetAcessWatchQuery, exports.useGetBagGbQuery = exports.productApi.useGetBagGbQuery, exports.useGetBagsHbQuery = exports.productApi.useGetBagsHbQuery, exports.useGetBagsQuery = exports.productApi.useGetBagsQuery, exports.useGetBagsToteQuery = exports.productApi.useGetBagsToteQuery, exports.useGetCustomsQuery = exports.productApi.useGetCustomsQuery, exports.useGetWalletsQuery = exports.productApi.useGetWalletsQuery, exports.useGetProductIdQuery = exports.productApi.useGetProductIdQuery;
