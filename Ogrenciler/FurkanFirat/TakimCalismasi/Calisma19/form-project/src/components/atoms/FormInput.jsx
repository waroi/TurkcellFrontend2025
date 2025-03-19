export const FormInput = ({ type, id, name, placeholder }) => {
  return (
    <input
      className='form-control'
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};
