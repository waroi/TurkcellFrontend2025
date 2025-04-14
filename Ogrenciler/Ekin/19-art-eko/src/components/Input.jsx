export default function Input({ value, onChange, placeholder }) {
  return (
    <div className="input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
