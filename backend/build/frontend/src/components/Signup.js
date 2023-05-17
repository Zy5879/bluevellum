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
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const authApi_1 = require("../redux/features/authApi");
const react_toastify_1 = require("react-toastify");
function SignUp() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [signUp, { isLoading }] = (0, authApi_1.useSignUpMutation)();
    const [email, setEmail] = (0, react_1.useState)("");
    const [errorEmail, setEmailError] = (0, react_1.useState)(false);
    const [password, setPassword] = (0, react_1.useState)("");
    const [errorPassword, setErrorPassword] = (0, react_1.useState)(false);
    const [confirmpassword, setConfirmPassword] = (0, react_1.useState)("");
    const [firstname, setFirstname] = (0, react_1.useState)("");
    const [errorFN, setErrorFn] = (0, react_1.useState)(false);
    const [lastname, setLastName] = (0, react_1.useState)("");
    const [errorLN, setErrorLN] = (0, react_1.useState)(false);
    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if (firstname.trim().length < 2) {
            setErrorFn(true);
        }
        else {
            setErrorFn(false);
        }
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        console.log(lastname.length);
        if (lastname.trim().length < 2) {
            setErrorLN(true);
        }
        else {
            setErrorLN(false);
        }
    };
    const handleEmail = (e) => {
        const value = e.target.value.trim().toLowerCase();
        const isValidEmail = re.test(value);
        setEmail(value);
        setEmailError(!isValidEmail);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (password.length < 7) {
            setErrorPassword(true);
        }
        else if (password.search(/[a-z]/i) < 0) {
            setErrorPassword(true);
        }
        else if (password.search(/[0-9]/) < 0) {
            setErrorPassword(true);
        }
        else {
            setErrorPassword(false);
        }
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield signUp({ firstname, lastname, email, password });
            react_toastify_1.toast.success("SIGNUP SUCCESSFUL! LOGIN NOW", {
                position: react_toastify_1.toast.POSITION.TOP_RIGHT,
            });
            setFirstname("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/login");
        }
        catch (error) {
            react_toastify_1.toast.error("SIGNUP FAILED", {
                position: react_toastify_1.toast.POSITION.TOP_RIGHT,
            });
        }
    });
    const passwordValid = password === confirmpassword;
    return (<div className="flex items-center justify-center p-6 mt-20 mb-20">
      <form onSubmit={(e) => void handleSubmit(e)} className="bg-white shadow-md rounded p-8 px-8 pg-6 pb-8 mt-8 md:w-2/4 w-full">
        <div className="mb-4">
          <label>FIRSTNAME</label>
          <input type="text" name="firstname" value={firstname} onChange={handleFirstName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" minLength={3}/>
          {errorFN ? (<span className="text-xs text-red-500 font-bold">
              FIRSTNAME HAS TO BE MORE THAN 3
            </span>) : ("")}
        </div>
        <div className="mb-6">
          <label>LASTNAME</label>
          <input type="text" name="lastname" value={lastname} onChange={handleLastName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          {errorLN ? (<span className="text-xs text-red-500 font-bold">
              LASTNAME HAS TO BE MORE THAN 3
            </span>) : ("")}
        </div>
        <div className="mb-6">
          <label>EMAIL</label>
          <input type="email" name="email" value={email} onChange={handleEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          {errorEmail ? (<span className="text-xs text-red-500 font-bold">
              EMAIL IS INVALID
            </span>) : ("")}
        </div>
        <div className="mb-6">
          <label>PASSWORD</label>
          <input type="password" name="password" value={password} onChange={handlePassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          {errorPassword ? (<div className="flex flex-col">
              <span className="text-xs text-red-500 font-bold">
                Your password must be at least 8 characters
              </span>
              <span className="text-xs text-red-500 font-bold">
                Your password must contain at least one letter
              </span>
              <span className="text-xs text-red-500 font-bold">
                Your password must contain at least one digit
              </span>
            </div>) : ("")}
        </div>
        <div className="mb-6">
          <label>CONFIRM PASSWORD</label>
          <input type="password" name="confirmpassword" value={confirmpassword} onChange={handleConfirmPassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          {!passwordValid ? (<span className="text-xs text-red-500 font-bold">
              PASSWORDS DO NOT MATCH
            </span>) : ("")}
        </div>
        <div className="flex items-center justify-between">
          <button disabled={errorEmail ||
            errorFN ||
            errorPassword ||
            errorLN ||
            !passwordValid ||
            !firstname ||
            !lastname ||
            !email ||
            !password ||
            !confirmpassword ||
            isLoading} className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline disabled:bg-gray-300">
            {isLoading ? "LOADING..." : "SIGNUP"}
          </button>
        </div>
      </form>
    </div>);
}
exports.default = SignUp;
