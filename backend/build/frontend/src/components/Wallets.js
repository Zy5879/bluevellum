"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { useState, useEffect } from "react";
// import { LeatherInfo } from "../types/type";
// import walletService from "../services/getWallets";
const productApi_1 = require("../redux/features/productApi");
const react_router_dom_1 = require("react-router-dom");
function Wallets() {
    const { data, error, isLoading } = (0, productApi_1.useGetWalletsQuery)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleProductClick = (id) => {
        navigate(`/products/item/${id}`);
    };
    if (isLoading) {
        return (<div className="h-screen flex flex-col items-center justify-center">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-gray-200 border-8 h-20 w-20"></div>
      </div>);
    }
    if (error) {
        return (<div className="h-screen flex flex-col items-center justify-center">
        Error: There's been an error fetching data
      </div>);
    }
    if (data) {
        return (<main className="grid justify-center">
        <section className="grid grid-cols-2 gap-14 md:grid-cols-3 md:max-w-6xl items-center mt-20 mb-20">
          {data.map((item) => (<div className="cursor-pointer" key={item.id} onClick={() => handleProductClick(item.id)}>
              <img src={item.img} className="rounded-md w-full items-center"/>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-bold text-center mt-6">
                  {item.name}
                </p>
                <p className="text-sm italic text-center">${item.cost}</p>
              </div>
            </div>))}
        </section>
      </main>);
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
exports.default = Wallets;
