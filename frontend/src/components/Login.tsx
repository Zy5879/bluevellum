/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCheckLoginMutation } from "../redux/features/authApi";
import { useState, SyntheticEvent, useEffect } from "react";
import { setUser } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [checkLogin, { data, isLoading, isSuccess, isError }] =
    useCheckLoginMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await checkLogin({ email, password });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ user: data, token: data?.token }));
      window.localStorage.setItem("loggedInUser", JSON.stringify(data));

      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="flex items-center justify-center p-6 mt-20 mb-20">
      <form
        className="bg-white shadow-md rounded p-8 px-8 pg-6 pb-8 mt-8 md:w-2/4 w-full"
        onSubmit={(e) => void handleLogin(e)}
      >
        <div className="mb-4">
          <label className="block text-black font-bold mb-2">EMAIL</label>

          <input
            type="email"
            name="email"
            value={email}
            aria-label="email"
            onChange={handleEmail}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {isError ? (
            <span className="text-red-500 text-sm">Invalid email/password</span>
          ) : (
            ""
          )}
        </div>
        <div className="mb-6">
          <label className="block text-black text sm font-bold mb-2">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            value={password}
            aria-label="password"
            onChange={handlePassword}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {isError ? (
            <span className="text-red-500 text-sm">Invalid email/password</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={isLoading}
            className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            {isLoading ? "LOADING..." : "LOGIN"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            disabled={isLoading}
            className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
