import React from "react";

const Input = ({
  classes = "",
  name = "",
  label = "",
  value = "",
  inputClasses = "",
  // onChange = () => {},
  placeholder = "",
  type = "text",
  iconClasses = "",
  icon,
  ...props
}) => {
  const isFilled = value.length > 0

  return (
    <div
      className={`relative flex flex-col bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] justify-center pl-[9px] h-[45px] items-center ${classes}`}
    >
      <input
        type={type}
        name={name}
        value={value}
        // onChange={onChange}
        placeholder={placeholder}
        className={`w-full text-sm font-medium text-dark-blue focus:outline-none peer  relative z-10 bg-transparent ${
          isFilled && "mt-1"
        } ${inputClasses}`}
        {...props}
      />
      {label && (
        <label
          className={`absolute left-2 text-[#7D899F] transition-all duration-200 ease-in-out top-1/2 -translate-y-1/2 text-xs peer-focus:top-[10px] peer-focus:text-[10px]
          `}
          style={{
            top: isFilled && "10px",
            fontSize: isFilled && "10px",
          }}
        >
          {label}
        </label>
      )}

      {icon && (
        <span
          className={`absolute right-3 top-1/2 -translate-y-1/2 ${iconClasses}`}
        >
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
