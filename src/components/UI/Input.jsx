const Input = ({
  type,
  id,
  register,
  children,
  formState: { errors },
  rules,
  errorMessage,
}) => {
  return (
    <div className="relative w-3/5">
      <input
        className={`w-full block appearance-none focus:ring-0 focus:bg-slate-100 focus:outline-slate-200 border-2 rounded-sm bg-white text-black peer border-black`}
        placeholder=" "
        {...register(id, rules)}
        aria-invalid={errors[id] ? "true" : "false"}
        type={type}
        id={id}
      />
      <label
        className={`absolute duration-100 transform -translate-y-6 scale-75 origin-[0] left-2 top-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-pointer`}
        htmlFor={id}
      >
        {children}
      </label>
      {errors[id] && (
        <p
          role="alert"
          className="text-red-500 text-sm mt-1"
        >
          {errors[id] && errorMessage[errors[id]?.type]}
        </p>
      )}
    </div>
  );
};

export default Input;
