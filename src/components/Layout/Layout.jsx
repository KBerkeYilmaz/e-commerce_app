import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden text-black flex flex-col bg-white ">
      <Header />
      <main>{children}</main>
      <Footer>Scandiweb Test Application</Footer>
    </div>
  );
}; 
export default Layout;
