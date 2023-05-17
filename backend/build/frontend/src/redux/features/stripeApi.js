"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckoutMutation = exports.stripeApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.stripeApi = (0, react_1.createApi)({
    reducerPath: "stripeApi",
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        checkout: builder.mutation({
            query: (data) => ({
                url: "/stripe/checkout",
                method: "POST",
                body: data,
            }),
        }),
    }),
});
exports.useCheckoutMutation = exports.stripeApi.useCheckoutMutation;
