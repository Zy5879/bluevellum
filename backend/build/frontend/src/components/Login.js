"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const authApi_1 = require("../redux/features/authApi");
const react_1 = require("react");
const authSlice_1 = require("../redux/features/authSlice");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
function Login() {
    const [checkLogin, { data, isLoading, isSuccess, isError }] = (0, authApi_1.useCheckLoginMutation)();
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield checkLogin({ email, password });
        }
        catch (error) {
            console.log(error);
        }
    });
    (0, react_1.useEffect)(() => {
        if (isSuccess) {
            dispatch((0, authSlice_1.setUser)({ user: data, token: data === null || data === void 0 ? void 0 : data.token }));
            window.localStorage.setItem("loggedInUser", JSON.stringify(data));
            navigate("/");
        }
    }, [isSuccess]);
    return (<div className="flex items-center justify-center p-6 mt-20 mb-20">
      <form className="bg-white shadow-md rounded p-8 px-8 pg-6 pb-8 mt-8 md:w-2/4 w-full" onSubmit={(e) => void handleLogin(e)}>
        <div className="mb-4">
          <label className="block text-black font-bold mb-2">EMAIL</label>

          <input type="email" name="email" value={email} aria-label="email" onChange={handleEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          {isError ? (<span className="text-red-500 text-sm">Invalid email/password</span>) : ("")}
        </div>
        <div className="mb-6">
          <label className="block text-black text sm font-bold mb-2">
            PASSWORD
          </label>
          {/* password */}
          <input type="password" name="password" value={password} aria-label="password" onChange={handlePassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          {isError ? (<span className="text-red-500 text-sm">Invalid email/password</span>) : ("")}
        </div>
        <div className="flex items-center justify-between">
          <button disabled={isLoading} className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
            {isLoading ? "LOADING..." : "LOGIN"}
          </button>
          <button type="button" onClick={() => navigate("/signup")} disabled={isLoading} className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
            SIGN UP
          </button>
        </div>
      </form>
    </div>);
}
exports.default = Login;
