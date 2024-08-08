import React from "react";
import { CiSearch } from "react-icons/ci";

type SearchBarProps = {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  mainDivClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  placeholder?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  inputProps = {},
  mainDivClassName = "",
  inputClassName = "",
  iconClassName = "",
}) => {
  return (
    <div
      className={`flex-grow mx-4 flex items-center bg-white px-2 ${mainDivClassName}`}
    >
      <input
        {...inputProps}
        type="text"
        className={`w-full px-2 rounded-full text-primary-text outline-none placeholder:text-xs placeholder:text-gray-400 ${inputClassName}`}
      />

      <CiSearch className={`text-gray-500 ${iconClassName}`} />
    </div>
  );
};

export default SearchBar;
