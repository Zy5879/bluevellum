import { useEffect, useState } from "react";
import bagService from "../services/getBags";
function Bags() {
  const [bags, setBags] = useState<Response | null>(null);
  useEffect(() => {
    const getBags = async () => {
      try {
        const response = await bagService.getAll();
        setBags(response);
      } catch (error) {
        if (error instanceof Error) {
          error.message;
        } else {
          return;
        }
      }
    };
    void getBags();
  }, []);
  return (
    <>
      <main>This is Bags</main>
    </>
  );
}

export default Bags;
