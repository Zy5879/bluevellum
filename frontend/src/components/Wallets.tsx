// import { useState, useEffect } from "react";
// import { LeatherInfo } from "../types/type";
// import walletService from "../services/getWallets";
import { useGetWalletsQuery } from "../redux/features/productApi";
import { useNavigate } from "react-router-dom";

function Wallets() {
  const { data, error, isLoading } = useGetWalletsQuery();
  const navigate = useNavigate();
  const handleProductClick = (id: string) => {
    navigate(`/products/item/${id}`);
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    <div>Error: There's been an error fetching data</div>;
  }

  if (data) {
    return (
      <main>
        <section>
          {data.map((item) => (
            <div key={item.id} onClick={() => handleProductClick(item.id)}>
              <img src={item.img} />
              <p>{item.name}</p>
              <p>{item.cost}</p>
            </div>
          ))}
        </section>
      </main>
    );
  }

  return null;
  // const [wallets, setWallets] = useState<LeatherInfo[]>();
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await walletService.getAllWallets();
  //       setWallets(response);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         return error.message;
  //       }
  //     }
  //   };
  //   void getData();
  // }, []);
  // return (
  //   <main>
  //     <h1>This is Wallets</h1>
  //     <section>
  //       {wallets
  //         ? wallets.map((item) => (
  //             <div key={item.id}>
  //               <p>{item.name}</p>
  //               <p>{item.cost}</p>
  //               <img src={item.img} />
  //             </div>
  //           ))
  //         : ""}
  //     </section>
  //   </main>
  // );
}

export default Wallets;
