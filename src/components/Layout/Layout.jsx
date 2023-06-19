import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative w-screen min-h-screen max-h-max overflow-x-hidden text-black bg-white">
      <Header />
      <main>{children}</main>
      <Footer>Hello World</Footer>
    </div>
  );
};

export default Layout;
