import clsx from "clsx";
import React from "react";
import Icon from "./Icon";

type SearchInputProps = {
  label?: string;
  labelClass?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const SearchInput = ({
  className,
  value,
  onChange,
  placeholder,
}: SearchInputProps) => {
  return (
    <div
      className={clsx(
        "rounded-pill form-control body3 d-flex align-items-center gap-2 px-3 py-1",
        className
      )}
    >
      <Icon className="text-secondary2" name="magnifyingGlass" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input bg-transparent border-0 p-0 m-0 w-100"
      />
    </div>
  );
};

export default SearchInput;
