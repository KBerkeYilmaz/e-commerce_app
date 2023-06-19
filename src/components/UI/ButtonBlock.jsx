import {block} from 'million/react'


const ButtonBlock = block(function Button({
  type,
  id,
  name,
  children,
  className,
  isDisabled,
}) {
  return (
    <button
      className={className}
      id={id}
      type={type}
      value={name}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
});

export default ButtonBlock;
