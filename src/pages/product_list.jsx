import { useState, useEffect } from "react";
import ItemCardBlock from "../components/UI/ItemCardBlock";
import { Block } from "million";
import { API_URL } from "../config";
import { useFetch } from "../components/Hooks/useFetch";

const ProductListPage = (props) => {
  const [products, setProducts] = useState([]);
  const [fetchData, isLoading, error] = useFetch('GET');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData(API_URL);
      setProducts(data);
    };

    fetchProducts();
  });

  return (
    <section className="my-10 min-h-[62vh] w-screen grid grid-cols-5 gap-10 px-5 ">
      {products && products.map((item) => (
        <ItemCardBlock
          name={item.name}
          sku={item.sku}
          key={item.sku}
          price={item.price}
          type={item.productType}
        />
      ))}
    </section>
  );
};

export default ProductListPage;
