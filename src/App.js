import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductListPage from "./pages/product_list";
import AddProduct from "./pages/product_add";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/product_list" />}
          />
          <Route
            path="/product_list"
            element={<ProductListPage />}
          />
          <Route
            path="/product_add"
            element={<AddProduct />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
