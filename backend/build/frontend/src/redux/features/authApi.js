"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteFromCartMutation = exports.useUpdateCartMutation = exports.useAddToCartMutation = exports.useGetCartQuery = exports.useSignUpMutation = exports.useCheckLoginMutation = exports.authApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.authApi = (0, react_1.createApi)({
    reducerPath: "authApi",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: "http://localhost:3000",
        prepareHeaders: (headers) => {
            const loggedUser = window.localStorage.getItem("loggedInUser");
            if (loggedUser) {
                const user = JSON.parse(loggedUser);
                headers.set("Authorization", `Bearer ${user.token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        checkLogin: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        signUp: builder.mutation({
            query: (data) => ({
                url: "/signup",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        getCart: builder.query({
            query: () => "",
            providesTags: ["User"],
        }),
        addToCart: builder.mutation({
            query: (data) => ({
                url: "/cart",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        updateCart: builder.mutation({
            query: (data) => ({
                url: "/cart",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        deleteFromCart: builder.mutation({
            query: (data) => ({
                url: "/cart",
                method: "DELETE",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
    }),
});
exports.useCheckLoginMutation = exports.authApi.useCheckLoginMutation, exports.useSignUpMutation = exports.authApi.useSignUpMutation, exports.useGetCartQuery = exports.authApi.useGetCartQuery, exports.useAddToCartMutation = exports.authApi.useAddToCartMutation, exports.useUpdateCartMutation = exports.authApi.useUpdateCartMutation, exports.useDeleteFromCartMutation = exports.authApi.useDeleteFromCartMutation;
