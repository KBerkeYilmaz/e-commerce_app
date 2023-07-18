import { useState, useEffect, useRef } from "react";
import Input from "../../UI/Input";

const SelectType = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  const toggleDropdown = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleTypeChange = (e) => {
    const value = e.target.innerText;
    setType(value);
    
    toggleDropdown();
  };

  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="relative"
      ref={ref}
    >
      <Input

        type="text"
        id={props.id}
        name={props.name}
        value={type}
        onClick={toggleDropdown}
      >
        <h3>Type</h3>
      </Input>
      {isOpen && (
        <div
          className={`absolute w-full z-50 bg-slate-100 transition-all duration-150 ease-out transform origin-top opactiy-0 ${
            isOpen && "opacity-100"
          } overflow-hidden`}
        >
          <h5
            className="p-2 cursor-pointer hover:bg-slate-200"
            value="DVD"
            onClick={handleTypeChange}
          >
            DVD
          </h5>
          <h5
            className="p-2 cursor-pointer hover:bg-slate-200"
            onClick={handleTypeChange}
          >
            Furniture
          </h5>
          <h5
            className="p-2 cursor-pointer hover:bg-slate-200"
            onClick={handleTypeChange}
          >
            Book
          </h5>
        </div>
      )}
    </div>
  );
};

export default SelectType;
