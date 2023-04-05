import Navbar from "./components/Navbar";
import RouteProvider from "./components/Routes";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <RouteProvider />
    </>
  );
}

export default App;
