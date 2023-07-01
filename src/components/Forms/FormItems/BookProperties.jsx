import Input from "../../UI/Input";


const BookProperties = (props) => {
  return <>
         <Input
         type={"number"}
         >Weigh&nbsp;</Input>
         <p className="text-lg">Please provide weight in kilograms(kg).</p>
         </>
};

export default BookProperties;
