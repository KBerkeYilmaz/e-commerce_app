const Input = ({ type, id, value, onChange, children, className }) => {
  return (
    <div className="relative">
      <input
        className={`block appearance-none focus:ring-0 focus:bg-slate-100 focus:outline-slate-200 border-2 border-black rounded-sm bg-white text-black peer ${className}}`}
        placeholder=" "
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        key={id}
      />
      <label
        className={`absolute
                    duration-100
                    transform
                    -translate-y-6
                    scale-75
                    origin-[0]
                    left-2
                    top-0.5
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-6
                    
                    
                    `}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};

export default Input;



