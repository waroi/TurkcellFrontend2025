export const FormSelect = ({ options, name, id, value, onChange, onBlur }) => {
  return (
    <select
      name={name}
      id={id}
      className='form-select'
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
