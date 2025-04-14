export default function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={() => (disabled ? false : onClick())}
      {...(disabled && { className: "disabled" })}
    >
      {children}
    </button>
  );
}
