import Navbar from "./components/Navbar";
import RouteProvider from "./components/Routes";
import Footer from "./components/Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <ToastContainer /> */}
      <Navbar />
      <RouteProvider />
      <Footer />
    </div>
  );
}

export default App;
