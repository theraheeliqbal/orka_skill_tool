import React, { ChangeEvent, useId } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  id?: string;
}

const InputField = ({
  label,
  placeholder,
  id,
  type = "text",
  name,
  ...rest
}: InputFieldProps) => {
  const generatedID = useId();
  const inputID = id ? id : generatedID;

  return (
    <div className="w-full max-w-xs mx-auto my-4 ">
      <label className="blocktext-sm mb-2" htmlFor={inputID}>
        {label}
      </label>
      <input
        className="appearance-none block w-full text-primary-text border border-gray-500 rounded py-3 px-4  leading-tight focus:outline-none mt-4 placeholder:text-xs placeholder:text-gray-400 focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-300"
        id={inputID}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default InputField;
