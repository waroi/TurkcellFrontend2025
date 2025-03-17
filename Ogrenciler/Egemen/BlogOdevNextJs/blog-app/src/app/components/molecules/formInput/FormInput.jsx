import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";

const FormInput = ({ labelName, id, ...props }) => {
  return (
    <div className="col-md-4">
      <Label name={labelName} id={id}></Label>
      <Input id={id} {...props}></Input>
      <div className="valid-feedback">Başarılı</div>
      <div className="invalid-feedback">Başarısız</div>
    </div>
  );
};

export default FormInput;
