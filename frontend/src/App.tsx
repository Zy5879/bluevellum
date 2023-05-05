import Navbar from "./components/Navbar";
import RouteProvider from "./components/Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <RouteProvider />
      <Footer />
    </>
  );
}

export default App;
