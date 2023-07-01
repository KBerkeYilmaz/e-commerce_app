import Input from "../../UI/Input";

const FurnitureProperties = (props) => {
  return (
    <>
      <Input id="height">Height:&nbsp;</Input>
      <Input id="width">Width:&nbsp;</Input>
      <Input id="lengtht">Length:&nbsp;</Input>
      <p>Please provide dimensions in height, width and length (cm) format.</p>
    </>
  );
};

export default FurnitureProperties;
