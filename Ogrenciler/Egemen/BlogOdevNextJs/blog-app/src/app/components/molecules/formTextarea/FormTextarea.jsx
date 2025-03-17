import Label from "../../atoms/label/Label";
import Textarea from "../../atoms/textarea/Textarea";

const FormTextarea = ({ labelName, id, ...props }) => {
  return (
    <div className=" col-12">
      <Label name={labelName} id={id}></Label>
      <Textarea id={id} {...props}></Textarea>
      <div className="valid-feedback">Başarılı</div>
      <div className="invalid-feedback">Başarısız</div>
    </div>
  );
};

export default FormTextarea;
