/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCheckLoginMutation } from "../redux/features/authApi";
// import { useGetCartQuery } from "../redux/features/cartApi";
import { useState, SyntheticEvent, useEffect } from "react";
import { setUser } from "../redux/features/authSlice";
import homeService from "../services/home";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [checkLogin, { data, isSuccess }] = useCheckLoginMutation();
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
      const user = await checkLogin({ email, password });
      window.localStorage.setItem("loggedInUser", JSON.stringify(user));
      homeService.setToken(data?.token);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ user: data, token: data?.token }));
      navigate("/");
    }
  }, [isSuccess]);

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
    <div>
      <form onSubmit={(e) => void handleLogin(e)}>
        <div>
          email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          submit
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
