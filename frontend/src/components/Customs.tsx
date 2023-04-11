import { useEffect, useState } from "react";
import { LeatherInfo } from "../types/type";
import customService from "../services/getCustoms";
function Customs() {
  const [customs, setCustoms] = useState<LeatherInfo[]>();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await customService.getAllCustoms();
        setCustoms(response);
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
      <h1>This is Customs</h1>
      <section>
        {customs
          ? customs.map((item) => (
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

export default Customs;
