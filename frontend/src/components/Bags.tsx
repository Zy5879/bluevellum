// import { useEffect, useState } from "react";
// import bagService from "../services/getBags";
import { useGetBagsQuery } from "../redux/features/productApi";

function Bags() {
  const { data, isLoading, error } = useGetBagsQuery();
  // const [bags, setBags] = useState<LeatherInfo[]>();
  // useEffect(() => {
  //   const getBags = async () => {
  //     try {
  //       const response = await bagService.getAll();
  //       setBags(response);
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         throw Error(error.message);
  //       }
  //     }
  //   };
  //   void getBags();
  // }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>An error occured</div>;
  }

  if (data) {
    return (
      <main>
        <section>
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="leather-bags" />
              <p>{item.name}</p>
              <p>{item.cost}</p>
            </div>
          ))}
        </section>
      </main>
    );
  }

  return null;
  // if(data) {
  //   return(
  //     <main>
  //       <section>
  //         {data.map((item) => {
  //           <div key={item.id}></div>
  //         })}
  //       </section>
  //     </main>
  //   );
  // }

  // return (
  //   <main>
  //     <h1>This is bags</h1>
  //     <section>
  //       {bags
  //         ? bags.map((item) => (
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

export default Bags;
