import React, { Fragment, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
};

const Input = ({
  type = "text",
  value = "",
  onChange = () => {},
  placeholder = "",
  className,
  error,
  ...rest
}: InputProps) => {
  return (
    <Fragment>
      <input
        type={type}
        {...(value && { value })}
        onChange={onChange}
        placeholder={placeholder}
        id={placeholder}
        className={`border border-[#e6e7eb] rounded-md px-4 py-2 ${
          className || ""
        } ${error ? "border-red-500" : ""}`}
        {...rest}
      />
      {error && <p className="text-red-500">{error}</p>}
    </Fragment>
  );
};

export default Input;
