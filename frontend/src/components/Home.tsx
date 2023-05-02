import homeleather from "../assets/images/homeleather.png";
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
        <div>Check Out The Collection</div>
        <section>
          <article>BAGS</article>
          <article>WALLETS</article>
          <article>ACCESSORIES</article>
        </section>
      </section>
    </main>
  );
}

export default Home;
