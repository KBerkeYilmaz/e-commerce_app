import Input from "../../../UI/Input";

const FurnitureProperties = (props) => {

  const furnitureProperties = [
    {
      key: 1,
      id: "height",
      type: "number",
      title: "Height",
      rules: { required: true, min: 0, max: 9999 },
      errorMessage: {
        required: "This field is required",
        min: "Can not go lower than 0",
        max: "Can not go higher than 20000",
      },
    },
    {
      key: 2,
      id: "width",
      type: "number",
      title: "Width",
      rules: { required: true, min: 0, max: 9999 },
      errorMessage: {
        required: "This field is required",
        min: "Can not go lower than 0",
        max: "Can not go higher than 20000",
      },
    },
    {
      key: 3,
      id: "length",
      type: "number",
      title: "Length",
      rules: { required: true, min: 0, max: 9999 },
      errorMessage: {
        required: "This field is required",
        min: "Can not go lower than 0",
        max: "Can not go higher than 20000",
      },
    },
  ];


  return (
    <>
      {furnitureProperties.map((item) => {
        return (
          <Input
            key={item.key}
            id={item.id}
            type={item.type}
            register={props.register}
            formState={props.formState}
            rules={item.rules}
            required
            errorMessage={item.errorMessage}
          >
            <h3>{item.title}</h3>
          </Input>
        );
      })}
      

      <p>Please provide dimensions in height, width and length (cm) format.</p>
    </>
  );
};

export default FurnitureProperties;
