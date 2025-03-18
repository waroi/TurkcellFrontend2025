import React from 'react';

export default function FormTextArea({ name, value, onChange }) {
  return (
    <textarea
      className='form-control'
      rows={5}
      name={name}
      value={value}
      onChange={onChange}
      required
    ></textarea>
  );
}
