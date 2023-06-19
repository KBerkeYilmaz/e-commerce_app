import utility from "../../../Utility/Utility.module.css"
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
   
      <nav className="h-32 bg-white w-screen border-b-8 border-black">
        <div className="flex justify-between items-center px-5 h-full w-full">
          <h1 className="text-6xl p-5 font-semibold">Product List</h1>
          <ul className={`${utility["flex-center"]} gap-5 cursor-pointer text-4xl`}>
            <li >
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/new_product">Add Product</Link>
            </li>
          </ul>
        </div>
      </nav>
   
  );
};

export default Navbar;
