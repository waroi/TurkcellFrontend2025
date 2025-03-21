import { useFormik } from 'formik';
import { Button } from '../atoms/Button';
import { applicationFormFields } from '../../constants/formFields';
import { applicationFormSchema } from '../../schemas';
import ApplicationFormField from '../molecules/ApplicationFormField';

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
      {applicationFormFields.map((field) => (
        <ApplicationFormField
          key={field.id}
          field={field}
          touched={touched}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          setFieldValue={setFieldValue}
        />
      ))}

      <div className='d-flex justify-content-end gap-2'>
        <Button
          type='button'
          className='btn btn-secondary'
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button type='submit' className='btn btn-primary'>
          Submit
        </Button>
      </div>
    </form>
  );
};
