import { useGetProductIdQuery } from "../redux/features/productApi";
import { useAddToCartMutation } from "../redux/features/authApi";
import { useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";
// import { SyntheticEvent } from "react";
// import { CartItems } from "../types/type";
// import { ObjectId } from "mongoose";
function ProductById() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAppSelector((state) => state.authUser);

  if (!id) {
    return <div>PRODUCT NOT FOUND</div>;
  }
  const { data, isError, isLoading } = useGetProductIdQuery(id);
  const [addToCart] = useAddToCartMutation();

  if (isError) {
    return <div>There seems to be an error</div>;
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (data) {
    return (
      <main>
        <section>
          <div className="grid justify-center" key={data.id}>
            <img src={data.img} alt={data.name} className="rounded-md mt-6" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-center mt-6">{data.name}</p>
              <p className="text-center">$ {data.cost}</p>
            </div>
            <div className="flex items-center justify-center mt-5">
              <button
                onClick={() => void addToCart({ leatherId: data.id })}
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
