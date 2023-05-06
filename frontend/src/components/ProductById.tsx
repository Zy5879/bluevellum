import { useGetProductIdQuery } from "../redux/features/productApi";
import { useParams } from "react-router-dom";
function ProductById() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>PRODUCT NOT FOUND</div>;
  }
  const { data, isError, isLoading } = useGetProductIdQuery(id);

  console.log(data);

  if (isError) {
    return <div>There seems to be an error</div>;
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (data) {
    return (
      <main>
        <section>
          <div key={data.id}>
            <img src={data.img} alt={data.name} />
            <p>{data.name}</p>
            <p>{data.cost}</p>
          </div>
        </section>
      </main>
    );
  }
  return null;
}

export default ProductById;
