import NewProductForm from "../components/Forms/NewProductForm";
import { useState } from "react";
import AnimatedBlobBlock from "../components/Utility/AnimatedBlobBlock";

function NewProductPage() {
  const [items, setItems] = useState([]);

  const newProductHandler = (data) => {
    setItems((prevState) => [data, ...prevState]);
    console.log(items)
  };

  return (
    <>
      <AnimatedBlobBlock />
      <section className="absolute top-[8rem] left-10 w-screen h-[52.5rem] grid grid-cols-2">
        <NewProductForm newProductHandler={newProductHandler} />
      </section>
    </>
  );
}

export default NewProductPage;
