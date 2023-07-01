import NewProductForm from "../components/Forms/NewProductForm";
import AnimatedBlobBlock from "../components/Utility/AnimatedBlobBlock";

function NewProductPage(props) {
  return (
    <section>
      {/* <AnimatedBlobBlock /> */}
      <main className="w-screen h-screen flex flex-col justify-center items-center px-10">
        <NewProductForm />
      </main>
    </section>
  );
}

export default NewProductPage;
