export const FormTextArea = ({
  id,
  name,
  rows,
  cols,
  placeholder,
  value,
  onChange,
  onBlur,
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
      onBlur={onBlur}
      className='form-control'
    ></textarea>
  );
};
