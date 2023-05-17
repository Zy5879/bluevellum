import { useGetAccessQuery } from "../redux/features/productApi";
import { useNavigate } from "react-router-dom";
function Accessories() {
  const { data, isError, isLoading } = useGetAccessQuery();
  const navigate = useNavigate();

  const handleProductClick = (id: string) => {
    navigate(`/products/item/${id}`);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-gray-200 border-8 h-20 w-20"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        There's been problem retrieving data{" "}
      </div>
    );
  }

  if (data) {
    return (
      <main className="grid justify-center">
        <section className="grid grid-cols-2 gap-12 p-5 md:p-0 md:max-w-6xl items-center mt-20 mb-20">
          {data.map((item) => (
            <div
              className="cursor-pointer"
              key={item.id}
              onClick={() => handleProductClick(item.id)}
            >
              <img src={item.img} className="rounded-md w-full" />

              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-bold text-center mt-6">
                  {item.name}
                </p>
                <p className="text-sm italic text-center">${item.cost}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }
  return null;
  // const [accessories, setAccessories] = useState<LeatherInfo[]>();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await accService.getAllAccessories();
  //       setAccessories(response);
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         return error.message;
  //       }
  //     }
  //   };
  //   void getData();
  // }, []);
  // return (
  //   <main>
  //     <h1>This is Accessories</h1>
  //     <section>
  //       {accessories
  //         ? accessories.map((item) => (
  //             <div key={item.id}>
  //               <p>{item.name}</p>
  //               <p>{item.cost}</p>
  //               <img src={item.img}></img>
  //             </div>
  //           ))
  //         : ""}
  //     </section>
  //   </main>
  // );
}

export default Accessories;
