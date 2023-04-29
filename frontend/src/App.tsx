import Navbar from "./components/Navbar";
import RouteProvider from "./components/Routes";
import { useEffect } from "react";
import homeService from "./services/home";
import { setCart } from "./redux/features/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserCart = async () => {
      try {
        const response = await homeService.getUserCart();
        dispatch(setCart({ cart: response }));
        console.log(response);
        return response;
      } catch (error) {
        return { message: "No User Found" };
      }
    };

    void getUserCart();
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <RouteProvider />
    </>
  );
}

export default App;
