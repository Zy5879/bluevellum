import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../redux/features/authApi";
import { toast } from "react-toastify";
function SignUp() {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const navigate = useNavigate();

  const [signUp, { isLoading }] = useSignUpMutation();
  // const [submitted, setSubmitted] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [errorEmail, setEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  const [confirmpassword, setConfirmPassword] = useState<string>("");

  const [firstname, setFirstname] = useState<string>("");
  const [errorFN, setErrorFn] = useState<boolean>(false);

  const [lastname, setLastName] = useState<string>("");
  const [errorLN, setErrorLN] = useState<boolean>(false);

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
    if (firstname.trim().length < 2) {
      setErrorFn(true);
    } else {
      setErrorFn(false);
    }
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    console.log(lastname.length);
    if (lastname.trim().length < 2) {
      setErrorLN(true);
    } else {
      setErrorLN(false);
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();
    const isValidEmail = re.test(value);

    setEmail(value);
    setEmailError(!isValidEmail);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password.length < 7) {
      setErrorPassword(true);
    } else if (password.search(/[a-z]/i) < 0) {
      setErrorPassword(true);
    } else if (password.search(/[0-9]/) < 0) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await signUp({ firstname, lastname, email, password });
      toast.success("SIGNUP SUCCESSFUL! LOGIN NOW", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setFirstname("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      toast.error("SIGNUP FAILED", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const passwordValid = password === confirmpassword;

  return (
    <div className="flex items-center justify-center p-6 mt-20 mb-20">
      <form
        onSubmit={(e) => void handleSubmit(e)}
        className="bg-white shadow-md rounded p-8 px-8 pg-6 pb-8 mt-8 md:w-2/4 w-full"
      >
        <div className="mb-4">
          <label>FIRSTNAME</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={handleFirstName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            minLength={3}
          />
          {errorFN ? (
            <span className="text-xs text-red-500 font-bold">
              FIRSTNAME HAS TO BE MORE THAN 3
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="mb-6">
          <label>LASTNAME</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={handleLastName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errorLN ? (
            <span className="text-xs text-red-500 font-bold">
              LASTNAME HAS TO BE MORE THAN 3
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="mb-6">
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errorEmail ? (
            <span className="text-xs text-red-500 font-bold">
              EMAIL IS INVALID
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="mb-6">
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errorPassword ? (
            <div className="flex flex-col">
              <span className="text-xs text-red-500 font-bold">
                Your password must be at least 8 characters
              </span>
              <span className="text-xs text-red-500 font-bold">
                Your password must contain at least one letter
              </span>
              <span className="text-xs text-red-500 font-bold">
                Your password must contain at least one digit
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mb-6">
          <label>CONFIRM PASSWORD</label>
          <input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={handleConfirmPassword}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {!passwordValid ? (
            <span className="text-xs text-red-500 font-bold">
              PASSWORDS DO NOT MATCH
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={
              errorEmail ||
              errorFN ||
              errorPassword ||
              errorLN ||
              !passwordValid ||
              !firstname ||
              !lastname ||
              !email ||
              !password ||
              !confirmpassword ||
              isLoading
            }
            className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline disabled:bg-gray-300"
          >
            {isLoading ? "LOADING..." : "SIGNUP"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
