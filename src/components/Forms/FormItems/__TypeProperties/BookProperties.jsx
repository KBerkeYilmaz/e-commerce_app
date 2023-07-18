import Input from "../../../UI/Input";

const BookProperties = (props) => {


  return (
    <>
      <Input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      >
        Weight
      </Input>
      <p className="text-lg">Please provide weight in kilograms(kg).</p>
    </>
  );
};

export default BookProperties;
