import { useFormik } from 'formik';
import { Button } from '../atoms/Button';
import { applicationFormFields } from '../../constants/formFields';
import { applicationFormSchema } from '../../schemas';
import ApplicationFormField from '../molecules/ApplicationFormField';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
export const ApplicationForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
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
    },
    validationSchema: applicationFormSchema,
    onSubmit: async (values) => {
      console.log(values);
      await addDoc(collection(db, 'applications'), {
        ...values,
        timestamp: serverTimestamp(),
      });
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
