import NewProductForm from "../components/Forms/NewProductForm";
import AnimatedBlobBlock from "../components/Utility/AnimatedBlobBlock";

function NewProductPage(props) {
  return (
    <section className="w-screen h-full flex flex-col justify-center items-center px-10  my-14">
      {/* <AnimatedBlobBlock /> */}
      <NewProductForm />
    </section>
  );
}

export default NewProductPage;
