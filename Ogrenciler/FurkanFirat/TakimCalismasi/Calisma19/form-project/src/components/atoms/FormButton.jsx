export const FormButton = ({ content, type, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {content}
    </button>
  );
};
