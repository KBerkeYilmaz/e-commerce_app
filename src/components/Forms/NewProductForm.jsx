import { useState } from "react";
import utility from "../Utility/Utility.module.css"
import ButtonBlock from "../UI/ButtonBlock";
import Label from "../UI/Label";

const NewProductForm = (props) => {
  const [name, setName] = useState("");
  const [sku, setSKU] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState(" ");
  const [result, setResult] = useState(null);
  const [isTrue, setIsTrue] = useState(false)


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSKUChange = (e) => {
    setSKU(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const url = form.action;
    const formData = new FormData(form);

    const formObj = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(formObj);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        props.newProductHandler(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const optionArray = ["Type Switcher", "disc", "furniture", "book"];
  const optionText = ["Type Switcher", "DISK", "Furniture", "Book"];

  return (
    <form
      className={`w-3/6 h-1/2 p-12 text-black border-4 border-slate-900 border-solid ${utility["flex-col-center"] } gap-5 rounded-lg`}
      action="http://localhost:8000/index.php"
      method="post"
      onSubmit={(event) => handleSubmit(event)}
      id="product_form"
    >
      <Label
        className={"border-2 border-black"}
        id="sku"
        type="text"
        value={sku}
        onChange={(event) => handleSKUChange(event)}
      >
        <h3>SKU</h3>
      </Label>
      <Label
        className={"border-2 border-black"}
        id="name"
        type="text"
        value={name}
        onChange={(event) => handleNameChange(event)}
      >
        <h3>Name</h3>
        
      </Label>
      <Label
        className={"border-2 border-black"}
        id="price"
        type="number"
        value={price}
        onChange={(event) => handlePriceChange(event)}
      >
        <h3>Price($)</h3>
      </Label>
      <div className="border border-b-slate-900">
        <label htmlFor="productType">Type:&nbsp;</label>
        <select
          className="bg-white"
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
      <ButtonBlock
        className="btn btn-primary bg-black hover:bg-slate-950"
        type="submit">
        Submit
      </ButtonBlock>
     
    </form>
  );
};

export default NewProductForm;
