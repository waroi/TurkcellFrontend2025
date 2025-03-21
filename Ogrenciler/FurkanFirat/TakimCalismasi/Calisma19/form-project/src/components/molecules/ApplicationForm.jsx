import { useFormik } from 'formik';
import { formFields } from '../../constants/formFields';
import { FormInput } from '../atoms/FormInput';
import { FormSelect } from '../atoms/FormSelect';
import { FormTextArea } from '../atoms/FormTextArea';
import { FormButton } from '../atoms/FormButton';
import { applicationFormSchema } from '../../schemas';

export const ApplicationForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      address: '',
      desiredPosition: '',
      additionalInfo: '',
      cv: null,
    },
    validationSchema: applicationFormSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className='row g-3' onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div className={`col-md-${field.column}`} key={field.id}>
          {['text', 'email', 'phone'].includes(field.type) && (
            <FormInput
              type={field.type}
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[field.name]}
              error={touched[field.name] && errors[field.name]}
            />
          )}

          {field.type === 'select' && (
            <FormSelect
              options={field.options}
              id={field.id}
              name={field.name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[field.name]}
              error={touched[field.name] && errors[field.name]}
            />
          )}

          {field.type === 'textarea' && (
            <FormTextArea
              id={field.id}
              name={field.name}
              rows={field.rows}
              cols={field.cols}
              placeholder={field.placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[field.name]}
              error={touched[field.name] && errors[field.name]}
            />
          )}

          {field.type === 'file' && (
            <input
              type='file'
              id={field.id}
              name={field.name}
              accept={field.accept}
              onChange={(event) =>
                setFieldValue(field.name, event.target.files[0])
              }
              className={`form-control ${
                touched[field.name] && errors[field.name] ? 'is-invalid' : ''
              }`}
            />
          )}

          {touched[field.name] && errors[field.name] && (
            <div className='text-danger'>{errors[field.name]}</div>
          )}
        </div>
      ))}

      <div className='d-flex justify-content-end gap-2'>
        <FormButton
          type='button'
          content='Reset'
          className='btn btn-secondary'
          onClick={handleReset}
        />
        <FormButton
          type='submit'
          content='Submit'
          className='btn btn-primary'
        />
      </div>
    </form>
  );
};
