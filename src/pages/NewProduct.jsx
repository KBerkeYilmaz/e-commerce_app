
const NewProduct = props => {

    

    return (    
    <form
        className={`w-1/6 h-2/6 bg-blue-300 text-white ${utility["flex-col-center"]} gap-5`}
        action="http://localhost:8000/server.php"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
        id='product_form'
      >
        <label htmlFor="sku">
          SKU:
          <input
            className="text-black"
            type="text"
            id="sku"
            name="sku"
            value={sku}
            onChange={(event) => handleSKUChange(event)}
          />
        </label>
        <label htmlFor="name">
          Name:
          <input
            className="text-black"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => handleNameChange(event)}
          />
        </label>

        <label htmlFor="price">
          Price:
          <input
            className="text-black"
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(event) => handlePriceChange(event)}
          />
        </label>
        <div>
          <label htmlFor="productType">Type:</label>
          <select
            className="text-black"
            type="text"
            id="productType"
            name="productType"
            value={type}
            onChange={(event) => handleTypeChange(event)}
          >
            <option value="">Type Switcher</option>
            <option value="furniture">Furniture</option>
            <option value="disk">Disk</option>
            <option value="book">Book</option>
          </select>
        </div>

        <button
          className="w-1/4 rounded-full  bg-blue-700"
          type="submit"
        >
          Submit
        </button>
        </form>
        {result && (
            <h1 className={`bg-slate-400 w-fit h-10 p-5 ${utility["flex-center"]}`}>
            {result}
            </h1>
        )}
        )
    }