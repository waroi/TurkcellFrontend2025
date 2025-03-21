import React from 'react';

const FormSelect = ({
  id,
  name,
  options,
  value,
  onChange,
  onBlur,
  error,
  className,
}) => {
  return (
    <>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className='text-danger'>{error}</div>}
    </>
  );
};

export default FormSelect;
