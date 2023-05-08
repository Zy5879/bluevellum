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
  // const [isLoggedIn, setLogin] = useState<boolean>(false);
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
      // dispatch(setUser({ user: data, token: data?.token }));
      // window.localStorage.setItem("loggedInUser", JSON.stringify(user));
      // homeService.setToken(data?.token);
      // setEmail("");
      // setPassword("");
      // navigate("/");
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // if (isSuccess) {
  //   dispatch(setUser({ user: data, token: data?.token }));
  //   window.localStorage.setItem("loggedInUser", JSON.stringify(data));
  //   setEmail("");
  //   setPassword("");
  //   window.location.reload();
  //   navigate("/");
  // }

  // if (isError) {
  //   toast.error("USER NOT FOUND", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // }

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ user: data, token: data?.token }));
      window.localStorage.setItem("loggedInUser", JSON.stringify(data));
      // homeService.setToken(data?.token);
      // setLogin(true);
      navigate("/");
      // window.location.reload();
    }
  }, [isSuccess]);

  // useEffect(() => {
  //   const getUserCart = async () => {
  //     try {
  //       const response = await homeService.getUserCart();
  //       dispatch(setCart({ shoppingcart: response }));
  //       console.log(response);
  //       return response;
  //     } catch (error) {
  //       return { message: "No User Found" };
  //     }
  //   };

  //   void getUserCart();
  // }, [isLoggedIn]);

  // if (isSuccess) {
  //   dispatch(setUser({ user: data, token: data?.token }));
  //   navigate("/");
  // }

  // useEffect(() => {
  //   const loggedUser = window.localStorage.getItem("loggedInUser");
  //   if (loggedUser) {
  //     const user = JSON.parse(loggedUser) as User;
  //     dispatch(setUser({ user: user.data, token: user.data.token }));
  //     homeService.setToken(user.data.token);
  //     console.log(user);
  //   }
  // }, []);

  return (
    <div className="flex items-center justify-center p-6 mt-20 mb-20">
      <form
        className="bg-white shadow-md rounded p-8 px-8 pg-6 pb-8 mt-8 md:w-2/4 w-full"
        onSubmit={(e) => void handleLogin(e)}
      >
        <div className="mb-4">
          <label className="block text-black font-bold mb-2">EMAIL</label>
          {/* email */}
          <input
            type="email"
            name="email"
            value={email}
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
          {/* password */}
          <input
            type="password"
            name="password"
            value={password}
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
