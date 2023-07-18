import ItemCardBlock from "../components/UI/ItemCardBlock";
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data)

const ProductListPage = (props) => {
  const { data, error, isLoading } = useSWR('http://localhost/e-commerce-app-kutalmis/products/exhibit', fetcher);

  

  return (
    <section
      className={`min-h-[62vh] w-screen  ${
        data && data.products && data.products.length > 0
          ? "grid sm:grid-cols-3 md:grid-cols-4 gap-10"
          : "flex flex-col justify-center items-center"
      } px-5 mt-[18vh] mb-10`}
    >
      {isLoading ? (
        <span className="loading loading-ball loading-md"></span>
      ) : (
        data &&
        data.products.map((item) => (
          <ItemCardBlock
            key={item.product_id}
            name={item.product_name}
            sku={item.product_sku}
            price={item.product_price}
            type={item.product_type}
          />
        ))
      )}
      {error && (
        <div className="alert alert-error w-1/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error.message}</span>
        </div>
      )}
    </section>
  );
};

export default ProductListPage;
