
function Button({ type, id, name, children, className }) {
  return (
    <button
      className={className}
      id={id}
      type={type}
      value={name}
    >
      {children}
    </button>
  );
}

export default Button;
