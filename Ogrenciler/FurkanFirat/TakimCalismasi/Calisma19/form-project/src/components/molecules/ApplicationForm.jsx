import {formFields} from "../../constants/formFields";
import {FormInput} from "../atoms/FormInput";

export const ApplicationForm = () => {
  return (
    <form className="row g-3">
      {formFields.map((field) => (
        <div className={`col-md-${field.column}`} key={field.id}>
          <FormInput
            type={field.type}
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
          />
        </div>
      ))}
      <div className="col-12">
        <button className="btn btn-primary">Reset</button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
