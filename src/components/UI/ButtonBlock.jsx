
function Button({  type, id, name, children, className, onClick } ) {
  return (
    <button
      className={className}
      id={id}
      type={type}
      value={name}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
