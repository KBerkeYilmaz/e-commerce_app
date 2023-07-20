import Input from "../../../UI/Input";

const BookProperties = (props) => {


  return (
    <>
      <Input
        id={props.id}
        type={props.type}
        register={props.register}
        formState={props.formState}
        rules={props.rules}
        required
        errorMessage={props.errorMessage}
      >
        <h3>{props.title}</h3>
      </Input>
      <p className="text-lg">Please provide weight in kilograms(kg).</p>
    </>
  );
};

export default BookProperties;
