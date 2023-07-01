import Input from "../../UI/Input";

const DiskProperties = (props) => {
  return (
    <>
      <Input 
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      >Size &nbsp;</Input>
      <p className="text-lg">Please provide size in megabytes (mb).</p>
    </>
  );
};

export default DiskProperties;
