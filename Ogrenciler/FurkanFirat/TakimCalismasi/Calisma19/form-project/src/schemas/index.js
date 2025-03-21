import * as Yup from 'yup';

export const applicationFormSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  address: Yup.string().required('Address is required'),
  desiredPosition: Yup.string().required('Position is required'),
  additionalInfo: Yup.string(),
  cv: Yup.mixed()
    .required('CV is required')
    .test('fileType', 'Only PDF, DOC, and DOCX are allowed', (value) =>
      value
        ? [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ].includes(value.type)
        : false
    ),
});
