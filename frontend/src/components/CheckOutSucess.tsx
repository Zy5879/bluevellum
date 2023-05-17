import { useNavigate } from "react-router-dom";
function CheckOutSuccess() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <span>CHECKOUT WAS A SUCCESS</span>
      <span>WILL RECIEVE ORDER CONFIRMATION SOON</span>
      <button
        className="cursor-pointer mt-6 bg-black text-white font-bold py-2 px-4 rounded-md mb-5 focus:outline-none focus:shadow-outline enabled:hover:bg-white enabled:hover:text-black enabled:border enabled:border-black enabled:duration-500 enabled:ease-in-out"
        onClick={() => navigate("/")}
      >
        HOME
      </button>
    </div>
  );
}

export default CheckOutSuccess;
