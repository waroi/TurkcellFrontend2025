import { FormLabel } from '../atoms/FormLabel';
import { FormInput } from '../atoms/FormInput';

export const RegisterFormField = ({ field, formik }) => {
  return (
    <div className={`mb-3 col-${field.column}`}>
      <FormLabel htmlFor={field.id} labelText={field.labelText} />
      <FormInput
        type={field.type}
        id={field.id}
        name={field.name}
        placeholder={field.placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[field.name]}
        className={`form-control ${
          formik.touched[field.name] && formik.errors[field.name]
            ? 'is-invalid'
            : ''
        }`}
      />
      {formik.touched[field.name] && formik.errors[field.name] && (
        <div className='invalid-feedback'>{formik.errors[field.name]}</div>
      )}
    </div>
  );
};
