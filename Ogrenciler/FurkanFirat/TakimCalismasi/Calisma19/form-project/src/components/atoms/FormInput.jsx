export const FormInput = ({
  type,
  id,
  name,
  placeholder,
  onChange,
  value,
  onBlur,
  className,
  error,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      />
      {error && <div className='text-danger'>{error}</div>}
    </>
  );
};
