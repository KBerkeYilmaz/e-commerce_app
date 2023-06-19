import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductListPage from "./pages/product_list";
import NewProductPage from "./pages/new_product";

function App() {
  const [items, setItems] = useState([]);

  const newProductHandler = (data) => {
    setItems((prevState) => [data, ...prevState]);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/new_product" element={<NewProductPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
