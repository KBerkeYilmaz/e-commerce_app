const Label = ({
  className,
  type,
  id,
  value,
  onChange,
  children,
}) => {
  return (
    <label htmlFor={id}>
      {children}
      <input
        className={`rounded-sm bg-white text-black ${className}`}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        key={id}
      />
    </label>
  );
};

export default Label;
