import { useGetProductIdQuery } from "../redux/features/productApi";
import { useAddToCartMutation } from "../redux/features/authApi";
import { useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";
function ProductById() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAppSelector((state) => state.authUser);

  if (!id) {
    return <div>PRODUCT NOT FOUND</div>;
  }
  const { data, isError, isLoading } = useGetProductIdQuery(id);
  const [addToCart] = useAddToCartMutation();

  console.log(data);

  if (isError) {
    return <div>There seems to be an error</div>;
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (data) {
    console.log(data);
    return (
      <main>
        <section>
          <div className="grid justify-center" key={data.uniqueId}>
            <div className="flex items-center justify-center">
              <img
                src={data.img}
                alt={data.name}
                className="rounded-md mt-20"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-bold text-center mt-6">{data.name}</p>
              <p className="text-center text-sm italic">${data.cost}</p>
            </div>
            <div className="flex items-center justify-center mt-5">
              <button
                onClick={() => void addToCart({ items: { ...data } })}
                className="cursor-pointer bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-md mb-5 focus:outline-none focus:shadow-outline"
                disabled={!user}
              >
                {!user ? "MUST BE SIGNED IN TO ADD TO CART" : "ADD TO CART"}
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }
  return null;
}

export default ProductById;
