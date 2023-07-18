import NewProductForm from "../components/Forms/NewProductForm";

function NewProductPage(props) {
  return (
    <section className="w-screen h-full flex flex-col justify-center items-center px-10 my-14">
      <NewProductForm />
    </section>
  );
}

export default NewProductPage;
