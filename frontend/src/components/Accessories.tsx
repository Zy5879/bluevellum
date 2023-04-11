import { useState, useEffect } from "react";
import { LeatherInfo } from "../types/type";
import accService from "../services/getAccessories";
function Accessories() {
  const [accessories, setAccessories] = useState<LeatherInfo[]>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await accService.getAllAccessories();
        setAccessories(response);
      } catch (error: unknown) {
        if (error instanceof Error) {
          return error.message;
        }
      }
    };
    void getData();
  }, []);
  return (
    <main>
      <h1>This is Accessories</h1>
      <section>
        {accessories
          ? accessories.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.cost}</p>
                <img src={item.img}></img>
              </div>
            ))
          : ""}
      </section>
    </main>
  );
}

export default Accessories;
