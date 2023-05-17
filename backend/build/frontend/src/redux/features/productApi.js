"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetProductIdQuery = exports.useGetWalletsQuery = exports.useGetCustomsQuery = exports.useGetBagsToteQuery = exports.useGetBagsQuery = exports.useGetBagsHbQuery = exports.useGetBagGbQuery = exports.useGetAcessWatchQuery = exports.useGetAccessQuery = exports.useGetAccessBeltQuery = exports.productApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.productApi = (0, react_1.createApi)({
    reducerPath: "productApi",
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: "http://localhost:3000/" }),
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
        // getBagsGbId: builder.query<LeatherInfo[], string>({
        //   query: (id) => `bags/gentlemanbag/${id}`,
        // }),
        getBagsTote: builder.query({
            query: () => "products/bags/tote",
        }),
        // getBagsToteId: builder.query<LeatherInfo[], string>({
        //   query: (id) => `bags/tote${id}`,
        // }),
        getBagsHb: builder.query({
            query: () => "products/bags/handbag",
        }),
        // getBagsHbId: builder.query<LeatherInfo[], string>({
        //   query: (id) => `bag/handbag/${id}`,
        // }),
        getWallets: builder.query({
            query: () => "products/wallets",
        }),
        // getWalletsId: builder.query<LeatherInfo[], string>({
        //   query: (id) => `wallets/${id}`,
        // }),
        getAccess: builder.query({
            query: () => "products/accessories",
        }),
        getAccessBelt: builder.query({
            query: () => "products/accessories/belt",
        }),
        // getAccessBeltId: builder.query<LeatherInfo[], string>({
        //   query: (id) => `accessories/belt/${id}`,
        // }),
        getAcessWatch: builder.query({
            query: () => "products/accessories/watch",
        }),
        // getAcessWatchId: builder.query<LeatherInfo[], string>({
        //   query: (id) => `accessories/watch/${id}`,
        // }),
        getCustoms: builder.query({
            query: () => "products/customs",
        }),
        // getCustomsId: builder.query<LeatherInfo[], string>({
        //   query: (id) => `customs/${id}`,
        // }),
    }),
});
// useGetAccessBeltIdQuery,
exports.useGetAccessBeltQuery = exports.productApi.useGetAccessBeltQuery, exports.useGetAccessQuery = exports.productApi.useGetAccessQuery, 
// useGetAcessWatchIdQuery,
exports.useGetAcessWatchQuery = exports.productApi.useGetAcessWatchQuery, exports.useGetBagGbQuery = exports.productApi.useGetBagGbQuery, 
// useGetBagsGbIdQuery,
// useGetBagsHbIdQuery,
exports.useGetBagsHbQuery = exports.productApi.useGetBagsHbQuery, exports.useGetBagsQuery = exports.productApi.useGetBagsQuery, 
// useGetBagsToteIdQuery,
exports.useGetBagsToteQuery = exports.productApi.useGetBagsToteQuery, 
// useGetCustomsIdQuery,
exports.useGetCustomsQuery = exports.productApi.useGetCustomsQuery, 
// useGetWalletsIdQuery,
exports.useGetWalletsQuery = exports.productApi.useGetWalletsQuery, exports.useGetProductIdQuery = exports.productApi.useGetProductIdQuery;
