import { useState } from "react";
import { useStore } from "../../state/store";

function ItemCard({
  name,
  sku,
  price,
  type,
  size,
  height,
  length,
  width,
  weight,
}) {
  const { addToSelected, removeFromSelected } = useStore();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    const currentlySelected = isClicked;
    setIsClicked(!currentlySelected);
    if (currentlySelected) {
      removeFromSelected(sku);
    } else {
      addToSelected(sku);
    }
  };
  return (
    <div className="p-20 md:h-[44vh] relative text-black border-4 border-slate-900 border-solid rounded-lg shadow-md shadow-gray-600 flex flex-col justify-center items-center gap-3">
      <div className="cursor-pointer">
        
        <button
          className="delete-checkbox btn btn-square btn-outline hover:bg-slate-100 absolute top-4 left-6"
          onClick={handleClick}
        >
          {isClicked && (
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
            </svg>
          )}
        </button>
      </div>
      <h3 className="w-52 text-center border-b-2 border-black rounded-sm flex justify-start ">
        SKU:&nbsp;{sku.charAt(0).toUpperCase() + sku.slice(1)}
      </h3>
      <h3 className="w-52 text-center border-b-2 border-black rounded-sm flex justify-start ">
        Name:&nbsp;{name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
      <h3 className="w-52 text-center border-b-2 border-black rounded-sm flex justify-start ">
        Price:&nbsp;{price}
      </h3>
      <h3 className="w-52 text-center border-b-2 border-black rounded-sm flex justify-start ">
        Type:&nbsp;{type.charAt(0).toUpperCase() + type.slice(1)}
      </h3>
      {type === "dvd" && (
        <h3 className="w-52 text-center border-b-2 border-black rounded-sm flex justify-start ">
          Size:&nbsp;{size}{"MB"}
        </h3>
      )}
      {type === "furniture" && (
        <h3 className="w-52 text-center border-b-2 border-black rounded-sm flex justify-start ">
          Dimensions:&nbsp;{height + "x" + width + "x" + length}
        </h3>
      )}
      {type === "book" && (
        <h3 className="w-52 text-center border-b-2 border-black rounded-sm flex justify-start ">
          Weight:&nbsp;{weight}{"KG"}
        </h3>
      )}
    </div>
  );
}

export default ItemCard;
