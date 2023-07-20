import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductListPage from "./pages/product_list";
import NewProductPage from "./pages/new_product";
import axios from 'axios';
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)


function App() {
  const { data, error, isLoading } = useSWR('http://localhost/e-commerce-app-kutalmis/products/exhibit', fetcher);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/product_list"
            element={<ProductListPage items={data} error={error} isLoading={isLoading} />}
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
