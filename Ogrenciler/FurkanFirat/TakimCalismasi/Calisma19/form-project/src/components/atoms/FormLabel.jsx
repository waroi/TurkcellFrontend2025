export const FormLabel = ({ htmlfor, labelText }) => {
  return (
    <label htmlFor={htmlfor} className='form-label'>
      {labelText}
    </label>
  );
};
