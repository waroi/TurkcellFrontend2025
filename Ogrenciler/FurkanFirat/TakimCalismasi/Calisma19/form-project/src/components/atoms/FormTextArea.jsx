import React from 'react';

const FormTextArea = ({
  id,
  name,
  rows,
  cols,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <>
      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className='form-control'
      />
      {error && <div className='text-danger'>{error}</div>}
    </>
  );
};

export default FormTextArea;
