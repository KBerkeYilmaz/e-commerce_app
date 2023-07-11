import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Layout from "./components/Layout/Layout";
import ProductListPage from "./pages/product_list";
import NewProductPage from "./pages/new_product";
import { useFetch } from "./components/Hooks/useFetch";

function App() {
  const [products, setProducts] = useState([]);
  const [fetchData, isLoading, error] = useFetch("GET");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData(
          "http://localhost/e-commerce-app-kutalmis/pages/get"
        );
        setProducts(data.products ?? []);
      } catch (error) {
        setProducts([]);
      }
    };
  
    fetchProducts();
    const interval = setInterval(fetchProducts, 3000); // fetches products every 3 seconds
  
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
    
  }, [fetchData]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<ProductListPage items={products} error={error} isLoading={isLoading} />}
          />
          <Route
            path="/new_product"
            element={<NewProductPage />}
          />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
