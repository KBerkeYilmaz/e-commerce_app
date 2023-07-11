import Input from "../../../UI/Input";

const FurnitureProperties = ({ height, onHeightChange, width, onWidthChange, length, onLengthChange, type }) => {
  return (
    <>
      <Input id="height" type={type} value={height} onChange={onHeightChange}>Height</Input>
      <Input id="width" type={type} value={width} onChange={onWidthChange}>Width</Input>
      <Input id="length" type={type} value={length} onChange={onLengthChange}>Length</Input>

      <p>Please provide dimensions in height, width and length (cm) format.</p>
    </>
  );
};

export default FurnitureProperties;
