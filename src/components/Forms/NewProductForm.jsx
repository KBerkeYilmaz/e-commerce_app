import { useForm } from "react-hook-form";
import Input from "../UI/Input";
import Button from "../UI/ButtonBlock";
import { useNavigate } from "react-router-dom";
import DVDProperties from "./FormItems/__TypeProperties/DVDProperties";
import BookProperties from "./FormItems/__TypeProperties/BookProperties";
import { useFetch } from "../Hooks/useFetch";
import { mutate } from "swr";
import { API_URL } from "../../config";

const NewProductForm = () => {
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const [fetchData, isLoading, error] = useFetch("POST");

  const productType = watch("productType");

  let navigate = useNavigate();

  const handleCancel = () => {
    reset();
    navigate("/product_list");
  };

  const onSubmit = async (data) => {
    let formData = {
      product_sku: data.sku,
      product_name: data.name,
      product_price: data.price,
      product_type: data.productType,
    };
    switch (data.productType) {
      case "dvd":
        formData = { ...formData, size: data.size ? Number(data.size) : null };
        break;
      case "book":
        formData = {
          ...formData,
          weight: data.weight ? Number(data.weight) : null,
        };
        break;
      case "furniture":
        formData = {
          ...formData,
          height: data.height ? Number(data.height) : null,
          width: data.width ? Number(data.width) : null,
          length: data.length ? Number(data.length) : null,
        };
        break;
      default:
        break;
    }

    try {
      await fetchData(API_URL + "/products/new", formData);
      mutate(API_URL + "/products/exhibit");
      navigate("/product_list");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formElements = [
    {
      key: 1,
      id: "sku",
      type: "text",
      title: "SKU",
      rules: {
        required: true,
        minLength: 5,
        maxLength: 20,
        pattern: /^[a-zA-Z0-9_-]+$/,
      },
      errorMessage: {
        required: "Please, submit required data",
        minLength: "This field requires minimum 5 characters",
        maxLength: "This field can not exceed 20 characters",
        pattern: "Special characters are not allowed except _ and -",
      },
    },
    {
      key: 2,
      id: "name",
      type: "text",
      title: "Name",
      rules: {
        required: true,
        minLength: 3,
        maxLength: 100,
        pattern: /^[a-zA-Z0-9 _-]+$/,
      },
      errorMessage: {
        required: "Please, submit required data",
        minLength: "This field requires minimum 3 characters",
        maxLength: "This field can not exceed 100 characters",
        pattern: "Special characters are not allowed except _ and -",
      },
    },
    {
      key: 3,
      id: "price",
      type: "number",
      title: "Price ($)",
      rules: {
        required: true,
        min: 0,
        max: 9999,
        pattern: /^[0-9]+$/,
      },
      errorMessage: {
        required: "Please, submit required data",
        min: "Can not go lower than 1",
        max: "Can not go higher than 9999",
        pattern: "Only numeric values are allowed",
      },
    },
  ];

  return (
    <form
      className={`sm:3/4 md:w-1/2 lg:w-1/3 h-fit p-12 mt-[15vh] text-black border-4 border-slate-900 border-solid flex flex-col justify-center items-center gap-5 rounded-lg`}
      onSubmit={handleSubmit(onSubmit)}
      id="product_form"
    >
      {isLoading ? (
        <span className="loading loading-ball loading-lg"></span>
      ) : error ? (
        <div className="alert alert-error w-1/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error.message}</span>
        </div>
      ) : (
        <>
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
          <div className="relative w-5/6 lg:w-4/6 border-2 border-black flex justify-between items-center">
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
              {...register("productType", { required: true })}
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
              rules={{ required: true, min: 0, max: 4500 }}
              errorMessage={{
                required: "Please, submit required data",
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
              rules={{ required: true, min: 0, max: 50 }}
              errorMessage={{
                required: "Please, submit required data",
                min: "Can not go lower than 1",
                max: "Can not go higher than 50kg",
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
                rules={{ required: true, min: 0, max: 20000 }}
                required
                errorMessage={{
                  required: "Please, submit required data",
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
                rules={{ required: true, min: 0, max: 20000 }}
                required
                errorMessage={{
                  required: "Please, submit required data",
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
                rules={{ required: true, min: 0, max: 20000 }}
                required
                errorMessage={{
                  required: "Please, submit required data",
                  min: "Can not go lower than 0",
                  max: "Can not go higher than 20000",
                }}
              >
                <h3>Length</h3>
              </Input>
              <p>
                Please provide dimensions in height, width and length (cm)
                format.
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
        </>
      )}
    </form>
  );
};

export default NewProductForm;
