import Input from "../../../UI/Input";

const DVDProperties = (props) => {




  return (
    <>
      <Input 
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      >Size</Input>
      <p className="text-lg">Please provide size in megabytes (mb).</p>
    </>
  );
};

export default DVDProperties;
