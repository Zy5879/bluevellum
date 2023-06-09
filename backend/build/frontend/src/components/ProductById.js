"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productApi_1 = require("../redux/features/productApi");
const authApi_1 = require("../redux/features/authApi");
const hooks_1 = require("../redux/hooks");
const react_router_dom_1 = require("react-router-dom");
function ProductById() {
    const { id } = (0, react_router_dom_1.useParams)();
    const { user } = (0, hooks_1.useAppSelector)((state) => state.authUser);
    if (!id) {
        return <div>PRODUCT NOT FOUND</div>;
    }
    const { data, isError, isLoading } = (0, productApi_1.useGetProductIdQuery)(id);
    const [addToCart] = (0, authApi_1.useAddToCartMutation)();
    console.log(data);
    if (isError) {
        return <div>There seems to be an error</div>;
    }
    if (isLoading) {
        return <div>Loading....</div>;
    }
    if (data) {
        console.log(data);
        return (<main>
        <section>
          <div className="grid justify-center" key={data.uniqueId}>
            <div className="flex items-center justify-center">
              <img src={data.img} alt={data.name} className="rounded-md mt-20"/>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-bold text-center mt-6">{data.name}</p>
              <p className="text-center text-sm italic">${data.cost}</p>
            </div>
            <div className="flex items-center justify-center mt-5">
              <button onClick={() => void addToCart({ items: Object.assign({}, data) })} className="cursor-pointer bg-black text-white font-bold py-2 px-4 rounded-md mb-5 focus:outline-none focus:shadow-outline enabled:hover:bg-white enabled:hover:text-black enabled:border enabled:border-black enabled:duration-500 enabled:ease-in-out" disabled={!user}>
                {!user ? "MUST BE SIGNED IN TO ADD TO CART" : "ADD TO CART"}
              </button>
            </div>
          </div>
        </section>
      </main>);
    }
    return null;
}
exports.default = ProductById;
