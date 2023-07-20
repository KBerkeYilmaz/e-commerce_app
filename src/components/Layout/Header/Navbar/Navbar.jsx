import utility from "../../../Utility/Utility.module.css";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../../../../state/store";

function Navbar(props) {
  const selectedItems = useStore((state) => state.selectedItems);
  const deleteSelected = useStore((state) => state.deleteSelected);
  const deleteAll = useStore((state) => state.deleteAll);

  const location = useLocation();

  let title;
  switch (location.pathname) {
    case "/product_list":
      title = "Product List";
      break;
    case "/new_product":
      title = "New Product";
      break;
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
              <button
                className="btn btn-warning rounded-md text-sm"
                disabled={selectedItems.length === 0}
                onClick={deleteSelected}
              >
                Delete Selected
              </button>
              <button
                className="btn btn-error rounded-md text-sm"
                onClick={deleteAll}
              >
                Mass Delete
              </button>

              <Link to="/new_product" className="btn btn-primary">Add Product</Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
