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
        <section className="grid gap-4 p-5 md:grid-cols-3 ">
          <article className="bg-bag relative aspect-square bg-no-repeat bg-cover bg-center shadow-lg rounded-sm">
            {/* <img
              className=" aspect-square rounded-sm object-cover "
              src={leatherbag}
              alt="bag"
            /> */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/[0.5]"></div>
            <div className="absolute top-2/4 left-0 right-0 text-center">
              <p className="text-white font-bold">BAGS</p>
              <button className="text-black font-bold bg-white rounded p-4 mt-3">
                SHOP BAGS
              </button>
            </div>
          </article>
          <article className="shadow-lg relative aspect-square rounded-sm bg-wallet bg-no-repeat bg-cover bg-center">
            {/* <img
              className="w-full aspect-square rounded-sm object-cover"
              src={leatherWaller}
              alt="leather wallet"
            /> */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/[0.5]"></div>
            <div className="absolute top-2/4 left-0 right-0 text-center">
              <p className="text-white font-bold">WALLETS</p>
              <button className="text-black font-bold bg-white rounded p-4 mt-3">
                SHOP WALLETS
              </button>
            </div>
          </article>
          <article className="bg-access aspect-square relative bg-no-repeat bg-cover bg-center shadow-lg rounded-sm">
            {/* <img
              className="w-full aspect-square rounded-sm object-cover"
              src={leatherAcc}
              alt="leather watchband"
            /> */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/[0.5]"></div>
            <div className="absolute top-2/4 left-0 right-0 text-center">
              <p className="text-white font-bold">ACCESSORIES</p>
              <button className="text-black font-bold bg-white rounded p-4 mt-3">
                SHOP ACCESSORIES
              </button>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Home;
