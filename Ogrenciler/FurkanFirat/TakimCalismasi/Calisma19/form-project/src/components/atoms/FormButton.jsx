export const FormButton = ({ content, type, className }) => {
  return (
    <button type={type} className={className}>
      {content}
    </button>
  );
};
