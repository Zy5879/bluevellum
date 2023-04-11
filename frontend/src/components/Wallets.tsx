import { useState, useEffect } from "react";
import { LeatherInfo } from "../types/type";
import walletService from "../services/getWallets";

function Wallets() {
  const [wallets, setWallets] = useState<LeatherInfo[]>();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await walletService.getAllWallets();
        setWallets(response);
      } catch (error) {
        if (error instanceof Error) {
          return error.message;
        }
      }
    };
    void getData();
  }, []);
  return (
    <main>
      <h1>This is Wallets</h1>
      <section>
        {wallets
          ? wallets.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.cost}</p>
                <img src={item.img} />
              </div>
            ))
          : ""}
      </section>
    </main>
  );
}

export default Wallets;
