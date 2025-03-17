const Textarea = ({ ...props }) => {
  return (
    <textarea
      {...props}
      className="form-control"
      placeholder="Açıklama giriniz."
      rows={5}
    ></textarea>
  );
};

export default Textarea;
