import { useForm } from "react-hook-form";
import Input from "../UI/Input";
import Button from "../UI/ButtonBlock";
import { useNavigate } from "react-router-dom";
import DVDProperties from "./FormItems/__TypeProperties/DVDProperties";
import BookProperties from "./FormItems/__TypeProperties/BookProperties";

export default function TestForm() {
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  const productType = watch("productType");

  let navigate = useNavigate();

  const handleCancel = () => {
    reset();
    navigate("/product_list");
  };

  const formElements = [
    {
      key: 1,
      id: "sku",
      type: "text",
      title: "SKU",
      rules: { required: true, minLength: 5, maxLength: 20 },
      errorMessage: {
        required: "This field is required",
        minLength: "This field requires minimum 5 characters",
        maxLength: "This field can not exceed 20 characters",
      },
    },
    {
      key: 2,
      id: "name",
      type: "text",
      title: "Name",
      rules: { required: true, minLength: 3, maxLength: 15 },
      errorMessage: {
        required: "This field is required",
        minLength: "This field requires minimum 3 characters",
        maxLength: "This field can not exceed 15 characters",
      },
    },
    {
      key: 3,
      id: "price",
      type: "number",
      title: "Price ($)",
      rules: { required: true, min: 0, max: 9999 },
      errorMessage: {
        required: "This field is required",
        min: "Can not go lower than 1",
        max: "Can not go higher than 9999",
      },
    },
  ];

  return (
    <form
      className={`w-1/3 h-fit p-12 mt-[15vh] text-black border-4 border-slate-900 border-solid flex flex-col justify-center items-center gap-5 rounded-lg`}
      onSubmit={handleSubmit(onSubmit)}
      id="product_form"
    >
      {formElements.map((item) => {
        return (
          <Input
            key={item.key}
            id={item.id}
            type={item.type}
            title={item.title}
            register={register}
            formState={formState}
            rules={item.rules}
            required
            errorMessage={item.errorMessage}
          >
            <h3>{item.title}</h3>
          </Input>
        );
      })}

      <div className="relative w-3/5 border-2 border-black flex justify-between items-center">
        <label
          htmlFor="productType"
          className="pl-1"
        >
          Type:
        </label>
        <select
          className="p-1 bg-white text-center w-4/5"
          name="productType"
          id="productType"
          {...register("productType", { required: true, defaultValue: "" })}
        >
          <option
            value=""
            disabled
            selected
          >
            Select Type
          </option>
          <option value="dvd">DVD</option>
          <option value="furniture">Furniture</option>
          <option value="book">Book</option>
        </select>
      </div>

      {productType === "dvd" && (
        <DVDProperties
          id="size"
          type="number"
          register={register}
          formState={formState}
          rules={{ required: true, min: 0, max: 9999 }}
          errorMessage={{
            required: "This field is required",
            min: "Can not go lower than 1",
            max: "Can not go higher than 4500mb",
          }}
          title="Size"
          required
        />
      )}
      {productType === "book" && (
        <BookProperties
          id="weight"
          type="number"
          register={register}
          formState={formState}
          rules={{ required: true, min: 0, max: 10 }}
          errorMessage={{
            required: "This field is required",
            min: "Can not go lower than 1",
            max: "Can not go higher than 10kg",
          }}
          title="Weight"
          required
        />
      )}
      {productType === "furniture" && (
        <>
          <Input
            key="1"
            id="height"
            type="number"
            register={register}
            formState={formState}
            rules={{ required: true, min: 0, max: 9999 }}
            required
            errorMessage={{
              required: "This field is required",
              min: "Can not go lower than 0",
              max: "Can not go higher than 20000",
            }}
          >
            <h3>Height</h3>
          </Input>
          <Input
            key="2"
            id="width"
            type="number"
            register={register}
            formState={formState}
            rules={{ required: true, min: 0, max: 9999 }}
            required
            errorMessage={{
              required: "This field is required",
              min: "Can not go lower than 0",
              max: "Can not go higher than 20000",
            }}
          >
            <h3>Width</h3>
          </Input>
          <Input
            key="3"
            id="length"
            type="number"
            register={register}
            formState={formState}
            rules={{ required: true, min: 0, max: 9999 }}
            required
            errorMessage={{
              required: "This field is required",
              min: "Can not go lower than 0",
              max: "Can not go higher than 20000",
            }}
          >
            <h3>Length</h3>
          </Input>
          <p>
            Please provide dimensions in height, width and length (cm) format.
          </p>
        </>
      )}

      <div className="flex gap-10">
        <Button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="btn btn-primary"
        >
          Save
        </Button>
      </div>
    </form>
  );
}
