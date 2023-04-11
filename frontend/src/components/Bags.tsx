import { useEffect, useState } from "react";
import bagService from "../services/getBags";
import { LeatherInfo } from "../types/type";

function Bags() {
  const [bags, setBags] = useState<LeatherInfo[]>();

  useEffect(() => {
    const getBags = async () => {
      try {
        const response = await bagService.getAll();
        setBags(response);
      } catch (error: unknown) {
        if (error instanceof Error) {
          return error.message;
        }
      }
    };
    void getBags();
  }, []);

  return (
    <main>
      <h1>This is bags</h1>
      <section>
        {bags
          ? bags.map((item) => (
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

export default Bags;
