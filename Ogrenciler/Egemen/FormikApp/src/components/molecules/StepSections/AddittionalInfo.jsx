import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import CustomInput from "../CustomInput/CustomInput";

const AddittionalInfo = () => {
  return (
    <div className="row g-3">
      <CustomInput
        label="Beklenen Maaş"
        name="expectedSalary"
        type="number"
        placeholder="Beklentiniz olan maaş ücretini giriniz"
        className="col-md-6"
      />
      <div className="col-12 mt-3">
        <CustomCheckbox
          label="Kullanım koşullarını kabul ediyorum."
          name="isAccepted"
        />
      </div>
    </div>
  );
};

export default AddittionalInfo;
