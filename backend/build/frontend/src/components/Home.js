"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homeleather_png_1 = __importDefault(require("../assets/images/homeleather.png"));
const react_router_dom_1 = require("react-router-dom");
function Home() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<main>
      <section>
        <img className="w-full h-screen" src={homeleather_png_1.default} alt="leather"/>
      </section>
      <section className="absolute flex flex-col items-center justify-center top-0 right-0 left-0 bottom-0">
        <div className="text-white text-subtitle font-bold text-xl ">
          HAND CRAFTED LEATHER GOODS
        </div>
        <button id="shop-products" onClick={() => navigate("/products/bags")} className="text-white font-bold bg-black rounded p-4 mt-3 text-xl md:text-base hover:bg-white hover:text-black duration-500 ease-in-out">
          SHOP PRODUCTS
        </button>
      </section>
      <section>
        <div className="font-bold text-center md:text-xl p-5">
          CHECK OUT THE COLLECTION
        </div>
        <section className="grid gap-4 p-5 md:grid-cols-3 ">
          <article className="bg-bag relative aspect-square bg-no-repeat bg-cover bg-center shadow-lg rounded-sm">
            <div className="absolute top-0 left-0 w-full h-full bg-black/[0.5]"></div>
            <div className="absolute top-2/4 left-0 right-0 text-center">
              <p className="text-white font-bold">BAGS</p>
              <button onClick={() => navigate("/products/bags")} className="text-black font-bold bg-white rounded p-4 mt-3 hover:bg-black hover:text-white duration-500 ease-in-out">
                SHOP BAGS
              </button>
            </div>
          </article>
          <article className="shadow-lg relative aspect-square rounded-sm bg-wallet bg-no-repeat bg-cover bg-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black/[0.5]"></div>
            <div className="absolute top-2/4 left-0 right-0 text-center">
              <p className="text-white font-bold">WALLETS</p>
              <button onClick={() => navigate("/products/wallets")} className="text-black font-bold bg-white rounded p-4 mt-3 hover:bg-black hover:text-white duration-500 ease-in-out">
                SHOP WALLETS
              </button>
            </div>
          </article>
          <article className="bg-access aspect-square relative bg-no-repeat bg-cover bg-center shadow-lg rounded-sm">
            <div className="absolute top-0 left-0 w-full h-full bg-black/[0.5]"></div>
            <div className="absolute top-2/4 left-0 right-0 text-center">
              <p className="text-white font-bold">ACCESSORIES</p>
              <button onClick={() => navigate("/products/accessories")} className="text-black font-bold bg-white rounded p-4 mt-3 hover:bg-black hover:text-white duration-500 ease-in-out">
                SHOP ACCESSORIES
              </button>
            </div>
          </article>
        </section>
        <section>
          <article className="p-5">
            <div className="border border-2 border-black rounded-md p-5">
              <h4 className="font-bold text-center  mb-4">ABOUT BLUE VELLUM</h4>
              <p className="font-bold">
                Blue Vellum LLC began in July 2018 all because I wanted a
                quality product that I would not have to break the bank to
                purchase. I've long admired the craftsmanship of art in any
                form. I would consider myself to be an artist with no particular
                specialty. I decided to put everything that I enjoy doing and
                make my own form of art. Making visions come true through custom
                designs and photographic art.
              </p>
            </div>
          </article>
        </section>
      </section>
    </main>);
}
exports.default = Home;
