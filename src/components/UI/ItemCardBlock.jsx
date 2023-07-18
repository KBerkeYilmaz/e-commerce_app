import { useState } from "react";

function ItemCard({ name, sku, price, type }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state
  };
  return (
    <div className="p-20 h-[35vh] relative text-black border-4 border-slate-900 border-solid rounded-lg shadow-md shadow-gray-600 flex flex-col justify-center items-center gap-3">
      <div className="cursor-pointer">
        {" "}
        {/* <div className="btn btn-neutral absolute top-6 left-8 w-[30px] h-[30px] border border-black" onClick={handleClick}></div>{isClicked &&  */}
        <button className="btn btn-square btn-outline hover:bg-slate-100 absolute top-4 left-6" onClick={handleClick}>
          {isClicked &&
          <svg
            fill="#e91a1a"
            width="40px"
            height="40px"
            viewBox="0 0 200 200"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>}
        </button>
      </div>
      <h3 className="w-48 text-center border-b-2 border-black rounded-sm flex justify-start ">
        SKU:&nbsp;{sku}
      </h3>
      <h3 className="w-48 text-center border-b-2 border-black rounded-sm flex justify-start ">
        Name:&nbsp;{name}
      </h3>
      <h3 className="w-48 text-center border-b-2 border-black rounded-sm flex justify-start ">
        Price:&nbsp;{price}
      </h3>
      <h3 className="w-48 text-center border-b-2 border-black rounded-sm flex justify-start ">
        Type:&nbsp;{type.toUpperCase()}
      </h3>
    </div>
  );
}

export default ItemCard;
