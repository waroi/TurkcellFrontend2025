export const FormInput = ({
  type,
  id,
  name,
  placeholder,
  onChange,
  value,
  onBlur,
}) => {
  return (
    <input
      className='form-control'
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  );
};
