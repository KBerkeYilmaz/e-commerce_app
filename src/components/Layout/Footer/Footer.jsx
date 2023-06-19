const Footer = ({ children }) => {
  return (
    <footer className="w-screen h-[15vh] bg-black absolute bottom-0 text-white flex justify-center items-center">
      {children}
    </footer>
  );
};

export default Footer;
