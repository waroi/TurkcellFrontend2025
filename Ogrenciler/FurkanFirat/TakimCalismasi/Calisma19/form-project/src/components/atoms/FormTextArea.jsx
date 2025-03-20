export const FormTextArea = ({
  id,
  name,
  rows,
  cols,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='form-control'
    ></textarea>
  );
};
