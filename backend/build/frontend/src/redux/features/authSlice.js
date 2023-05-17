"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCart = exports.setUser = exports.logout = exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    user: null,
    token: null,
    shoppingcart: null,
};
exports.authSlice = (0, toolkit_1.createSlice)({
    name: "authSlice",
    initialState,
    reducers: {
        logout: () => initialState,
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setCart: (state, action) => {
            state.shoppingcart = action.payload.shoppingcart;
        },
    },
});
_a = exports.authSlice.actions, exports.logout = _a.logout, exports.setUser = _a.setUser, exports.setCart = _a.setCart;
exports.default = exports.authSlice.reducer;
