import { useState, useContext } from "react";
import utility from "../Utility/Utility.module.css";
import ButtonBlock from "../UI/ButtonBlock";
import DVDProperties from "./FormItems/__TypeProperties/DVDProperties";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { API_URL } from "../../config";
import FurnitureProperties from "./FormItems/__TypeProperties/FurnitureProperties";
import BookProperties from "./FormItems/__TypeProperties/BookProperties";

// import DiskProperties from "./FormItems/DiskProperties";

const NewProductForm = (props) => {
  const [name, setName] = useState("");
  const [sku, setSKU] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Type Switcher");
  const [isType, setIsType] = useState(" ");
  const [size, setSize] = useState(" ");
  const [weight, setWeight] = useState(" ");
  const [height, setHeight] = useState(" ");
  const [width, setWidth] = useState(" ");
  const [length, setLength] = useState(" ");
  const [isToogled, setIsToogled] = useState(true);
  const [fetchData, isLoading, error] = useFetch("POST");
  const [products, setProducts] = useState([]);
 
  const handleHeightChange = (e) => {
    const value = parseInt(e.target.value);
    setHeight(value);
  };

  const handleWidthChange = (e) => {
    const value = parseInt(e.target.value);
    setWidth(value);
  };

  const handleLengthChange = (e) => {
    const value = parseInt(e.target.value);
    setLength(value);
  };


  let navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleSKUChange = (e) => {
    const value = e.target.value;
    setSKU(value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setType(value);
    if (value === "furniture") {
      setIsType("Furniture");
      setIsToogled(true);
    } else if (value === "dvd") {
      setIsType("DVD");
      setIsToogled(true);
    } else if (value === "book") {
      setIsType("Book");
      setIsToogled(true);
    } else if (value === "Type Switcher") {
      setIsToogled(false);
    } else {
      setIsType(null);
    }
  };

  const handleSizeChange = (e) => {
    const value = parseInt(e.target.value);
    setSize(value);
  };

  const handleWeightChange = (e) => {
    const value = parseInt(e.target.value);
    setWeight(value);
  };

  // const handleFurnitureChange = (e) => {
  //   const value = parseInt(e.target.value)

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      product_sku: sku,
      product_name: name,
      product_price: price,
      product_type: type
    };

    fetchData(API_URL + "/pages/add", formData).then(() => {
      // Fetch the list of products again after a new product is added
      fetchData(API_URL + "/pages/get").then((data) => {
        setProducts(data);
      });
    });
    navigate("/");
  }

  const optionArray = ["Type Switcher", "dvd", "furniture", "book"];
  const optionText = ["Type Switcher", "DVD", "Furniture", "Book"];

  return (
    <form
      className={`w-1/3 h-fit p-12 text-black border-4 border-slate-900 border-solid ${utility["flex-col-center"]} gap-5 rounded-lg`}
      onSubmit={(event) => handleSubmit(event)}
      id="product_form"
    >
      <Input
        id="sku"
        type="text"
        value={sku}
        onChange={(event) => handleSKUChange(event)}
      >
        <h3>SKU</h3>
      </Input>

      <Input
        id="name"
        type="text"
        value={name}
        onChange={(event) => handleNameChange(event)}
      >
        <h3>Name</h3>
      </Input>
      <Input
        id="price"
        type="number"
        value={price}
        onChange={(event) => handlePriceChange(event)}
      >
        <h3>Price($)</h3>
      </Input>

      {/* TYPE SELECTOR */}

      <div className=" border-b-slate-900 border-black rounded-sm p-1 border-2">
        <label htmlFor="productType">Type:&nbsp;</label>
        <select
          className="bg-white "
          type="text"
          id="productType"
          name="productType"
          value={type}
          onChange={(event) => handleTypeChange(event)}
        >
          {optionArray.map((option, index) => (
            <option
              key={index}
              value={option}
            >
              {optionText[index]}
            </option>
          ))}
        </select>
      </div>

      {isType === "Furniture" && (
        <FurnitureProperties
          height={height}
          onHeightChange={handleHeightChange}
          width={width}
          onWidthChange={handleWidthChange}
          length={length}
          onLengthChange={handleLengthChange}
          type="number"
      />
          
      )}
      {isType === "DVD" && (
        <DVDProperties
          onChange={handleSizeChange}
          value={size}
          id="size"
          type="number"
        />
         
      )}
      {isType === "Book" && (
        <BookProperties
          onChange={(event) => handleWeightChange(event)}
          value={weight}
          id="weight"
          type="number"
        />
      )}

      {/* SUBMIT BUTTON */}

      <ButtonBlock
        className="btn btn-primary bg-black hover:bg-slate-950"
        type="submit"
        // isDisabled={isToogled}
      >
        Save Product
      </ButtonBlock>
    </form>
  );
};

export default NewProductForm;
