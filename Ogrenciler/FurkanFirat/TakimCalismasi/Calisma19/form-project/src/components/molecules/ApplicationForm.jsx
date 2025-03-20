import { useFormik } from 'formik';
import { formFields } from '../../constants/formFields';
import { FormInput } from '../atoms/FormInput';
import { FormSelect } from '../atoms/FormSelect';
import { FormTextArea } from '../atoms/FormTextArea';
import { FormButton } from '../atoms/FormButton';

export const ApplicationForm = () => {
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      address: '',
      position: '',
      additionalInfo: '',
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className='row g-3' onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div className={`col-md-${field.column}`} key={field.id}>
          {(field.type === 'text' ||
            field.type === 'email' ||
            field.type === 'phone') && (
            <FormInput
              type={field.type}
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              value={values[field.name]}
            />
          )}

          {field.type === 'select' && (
            <FormSelect
              options={field.options}
              id={field.id}
              name={field.name}
              onChange={handleChange}
              value={values[field.name]}
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
              value={values[field.name]}
            />
          )}
        </div>
      ))}
      <div className='d-flex justify-content-end gap-2'>
        <FormButton type='reset' content='Reset' className='btn btn-primary' />
        <FormButton
          type='submit'
          content='Submit'
          className='btn btn-primary'
        />
      </div>
    </form>
  );
};
