import { useGetBagsQuery } from "../redux/features/productApi";
import { useNavigate } from "react-router-dom";

function Bags() {
  const { data, isLoading, error } = useGetBagsQuery();
  const navigate = useNavigate();

  const handleProductClick = (id: string) => {
    navigate(`/products/item/${id}`);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-gray-200 border-8 h-20 w-20"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        An error occured
      </div>
    );
  }

  if (data) {
    return (
      <main className="grid justify-center">
        <section className="grid grid-cols-2 gap-12 md:grid-cols-3 md:max-w-6xl items-center mt-20 mb-20">
          {data.map((item) => (
            <div
              className="cursor-pointer"
              key={item.uniqueId}
              onClick={() => handleProductClick(item.id)}
            >
              <img src={item.img} alt={item.name} className="rounded md" />
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-center mt-6 font-bold">
                  {item.name}
                </p>
                <p id="cost" className="text-sm italic">
                  ${item.cost}
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }

  return null;
}

export default Bags;
