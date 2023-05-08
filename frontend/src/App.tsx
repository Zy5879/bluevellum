import Navbar from "./components/Navbar";
import RouteProvider from "./components/Routes";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <RouteProvider />
      <Footer />
    </>
  );
}

export default App;
