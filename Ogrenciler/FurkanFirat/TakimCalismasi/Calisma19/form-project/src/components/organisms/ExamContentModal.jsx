import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../atoms/FormInput';
import { FormLabel } from '../atoms/FormLabel';

export const ExamContentModal = ({ isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      totalQuestions: '',
      easyQuestions: '',
      mediumQuestions: '',
      hardQuestions: '',
    },
    validationSchema: Yup.object({
      totalQuestions: Yup.number()
        .required('Required')
        .min(1, 'Must be at least 1'),
      easyQuestions: Yup.number()
        .required('Required')
        .min(0, 'Cannot be negative'),
      mediumQuestions: Yup.number()
        .required('Required')
        .min(0, 'Cannot be negative'),
      hardQuestions: Yup.number()
        .required('Required')
        .min(0, 'Cannot be negative'),
    }),
    onSubmit: (values) => {
      console.log('Form Data:', values);
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div className='modal fade show' style={{ display: 'block' }}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5'>Exam Content</h1>
            <button
              type='button'
              className='btn-close'
              onClick={onClose}
            ></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={formik.handleSubmit}>
              <FormLabel
                htmlFor='totalQuestions'
                labelText='How many questions?'
              />
              <FormInput
                type='number'
                id='totalQuestions'
                name='totalQuestions'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.totalQuestions}
                error={
                  formik.touched.totalQuestions && formik.errors.totalQuestions
                }
              />

              <FormLabel
                htmlFor='easyQuestions'
                labelText='How many easy questions?'
              />
              <FormInput
                type='number'
                id='easyQuestions'
                name='easyQuestions'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.easyQuestions}
                error={
                  formik.touched.easyQuestions && formik.errors.easyQuestions
                }
              />

              <FormLabel
                htmlFor='mediumQuestions'
                labelText='How many medium questions?'
              />
              <FormInput
                type='number'
                id='mediumQuestions'
                name='mediumQuestions'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mediumQuestions}
                error={
                  formik.touched.mediumQuestions &&
                  formik.errors.mediumQuestions
                }
              />

              <FormLabel
                htmlFor='hardQuestions'
                labelText='How many hard questions?'
              />
              <FormInput
                type='number'
                id='hardQuestions'
                name='hardQuestions'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hardQuestions}
                error={
                  formik.touched.hardQuestions && formik.errors.hardQuestions
                }
              />
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={onClose}
            >
              Close
            </button>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={formik.handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
