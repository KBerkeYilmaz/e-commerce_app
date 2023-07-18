import { useState } from "react";
import utility from "../Utility/Utility.module.css";
import ButtonBlock from "../UI/ButtonBlock";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import DVDProperties from "./FormItems/__TypeProperties/DVDProperties";
import FurnitureProperties from "./FormItems/__TypeProperties/FurnitureProperties";
import BookProperties from "./FormItems/__TypeProperties/BookProperties";
import { mutate } from "swr";
import { useFetch } from "../Hooks/useFetch";
import { API_URL } from "../../config";

const NewProductForm = (props) => {
  const [name, setName] = useState("");
  const [sku, setSKU] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState(" ");
  const [height, setHeight] = useState(" ");
  const [width, setWidth] = useState(" ");
  const [length, setLength] = useState(" ");
  const [fetchData, isLoading, error] = useFetch("POST");
  const [products, setProducts] = useState([]);

  let navigate = useNavigate();

  const formElements = [
    {
      key: 1,
      id: "sku",
      type: "text",
      title: "SKU",
      value: sku,
      onChange: (event) => handleSKUChange(event),
    },
    {
      key: 2,
      id: "name",
      type: "text",
      title: "Name",
      value: name,
      onChange: (event) => handleNameChange(event),
    },
    {
      key: 3,
      id: "price",
      type: "number",
      title: "Price ($)",
      value: price,
      onChange: (event) => handlePriceChange(event),
    },
    {
      key: 4,
      id: "productType",
      type: "text",
      value: type,
      onChange: (event) => handleTypeChange(event),
    },
  ];

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
  };

  const handleSizeChange = (e) => {
    const value = parseInt(e.target.value);
    setSize(value);
  };

  const handleWeightChange = (e) => {
    const value = parseInt(e.target.value);
    setWeight(value);
  };

  const handleWidthChange = (e) => {
    const value = parseInt(e.target.value);
    setWidth(value);
  };

  const handleLengthChange = (e) => {
    const value = parseInt(e.target.value);
    setLength(value);
  };

  const handleHeightChange = (e) => {
    const value = parseInt(e.target.value);
    setHeight(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      product_sku: sku,
      product_name: name,
      product_price: price,
      product_type: type,
      size: size,
    };
    
    try {
      await fetchData(API_URL + "/products/new", formData);
      mutate(API_URL + "/products/exhibit"); 
      navigate("/product_list");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      className={`w-1/3 h-fit p-12 mt-[15vh] text-black border-4 border-slate-900 border-solid ${utility["flex-col-center"]} gap-5 rounded-lg`}
      onSubmit={handleSubmit}
      id="product_form"
    >
      {formElements.slice(0, 3).map((item) => {
        return (
          <Input
            key={item.key}
            id={item.id}
            type={item.type}
            value={item.value}
            onChange={item.onChange}
          >
            <h3>{item.title}</h3>
          </Input>
        );
      })}

      <div className="relative w-48 border-2 border-black flex justify-between items-center">
        <label
          htmlFor="productType"
          className="pl-1"
        >
          Type:
        </label>
        <select
          className="p-1 bg-white text-center"
          name="productType"
          id="productType"
          value={type}
          onChange={handleTypeChange}
        >
          <option
            value=""
            disabled
          >
            Select Type
          </option>
          <option value="DVD">DVD</option>
          <option value="Furniture">Furniture</option>
          <option value="Book">Book</option>
        </select>
      </div>

      {type === "Furniture" && (
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
      {type === "DVD" && (
        <DVDProperties
          onChange={handleSizeChange}
          value={size}
          id="size"
          type="number"
        />
      )}
      {type === "Book" && (
        <BookProperties
          onChange={handleWeightChange}
          value={weight}
          id="weight"
          type="number"
        />
      )}

      {/* SUBMIT BUTTON */}
      <div className="flex justify-between gap-10">
        <ButtonBlock
          className="btn btn-error text-sm w-28 bg-red-500 hover:bg-red-400"
          type="submit"
        >
          Cancel
        </ButtonBlock>
        <ButtonBlock
          className="btn btn-primary w-28 text-sm hover:bg-slate-950"
          type="submit"
        >
          Save
        </ButtonBlock>
      </div>
    </form>
  );
};

export default NewProductForm;
