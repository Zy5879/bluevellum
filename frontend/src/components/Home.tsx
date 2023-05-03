import homeleather from "../assets/images/homeleather.png";
import leatherbag from "../assets/images/leatherbag.png";
import leatherWaller from "../assets/images/leatherWallet.png";
import leatherAcc from "../assets/images/leatherAcc.png";
function Home() {
  return (
    <main>
      <section>
        <img className="w-full h-screen" src={homeleather} alt="leather" />
      </section>
      <section className="absolute flex flex-col items-center justify-center top-0 right-0 left-0 bottom-0">
        <div className="text-white font-bold md:text-3xl">
          HAND CRAFTED LEATHER GOODS
        </div>
        <button className="text-white font-bold bg-black rounded p-4 mt-3 md:text-lg">
          SHOP PRODUCTS
        </button>
      </section>
      <section>
        <div className="font-bold text-center md:text-xl p-5">
          CHECK OUT THE COLLECTION
        </div>
        <section className="grid grid-cols-3 gap-4 p-5">
          <article className="bg-white shadow-lg rounded-sm">
            <img
              className=" aspect-square rounded-sm object-cover"
              src={leatherbag}
              alt="bag"
            />
            <div>
              <p className="text-black">BAGS</p>
              <button>SHOP BAGS</button>
            </div>
          </article>
          <article className="bg-white shadow-lg rounded-sm">
            <img
              className="w-full aspect-square rounded-sm object-cover"
              src={leatherWaller}
              alt="leather wallet"
            />
            <div>
              <p>WALLETS</p>
              <button>SHOP WALLETS</button>
            </div>
          </article>
          <article className="bg-white shadow-lg rounded-sm">
            <img
              className="w-full aspect-square rounded-sm object-cover"
              src={leatherAcc}
              alt="leather watchband"
            />
            <div>
              <p>ACCESSORIES</p>
              <button>SHOP ACCESSORIES</button>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Home;
