import utility from "../../../Utility/Utility.module.css";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();

  let title;
  switch (location.pathname) {
    case "/product_list":
      title = "Product List";
      break;
    case "/new_product":
      title = "New Product";
      break;
    // Add more cases as needed
    default:
      title = "Product List";
  }
  return (
    <nav className="h-[15vh] bg-white w-screen border-b-8 border-black fixed z-50">
      <div className="flex justify-between items-center px-5 h-full w-full">
        <h1 className="text-6xl font-semibold">{title}</h1>
        <ul
          className={`${utility["flex-center"]} gap-5 cursor-pointer text-4xl`}
        >
          {location.pathname === "/product_list" && (
            <div className="h-fit w-fit flex gap-6">
              <button className="btn btn-warning disabled rounded-md text-xl">
                Delete Selected
              </button>
              <button className="btn btn-error rounded-md text-xl">
                Mass Delete
              </button>{" "}
            </div>
          )}
          <li>
            <Link to="/product_list">Product List</Link>
          </li>
          <li>
            <Link to="/new_product">Add Product</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
