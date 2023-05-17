import Navbar from "./components/Navbar";
import RouteProvider from "./components/Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <RouteProvider />
      <Footer />
    </div>
  );
}

export default App;
