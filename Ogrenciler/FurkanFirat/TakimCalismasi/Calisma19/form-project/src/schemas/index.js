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
});

export const loginFormSchema = Yup.object({
  email: Yup.string()
    .email('Geçerli bir email giriniz')
    .required('Email alanı zorunludur'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .required('Şifre alanı zorunludur'),
});

export const registerFormSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Ad en az 3 karakter olmalıdır')
    .required('Ad zorunludur'),
  email: Yup.string()
    .email('Geçerli bir e-posta adresi girin')
    .required('E-posta zorunludur'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .required('Şifre zorunludur'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Şifreler eşleşmiyor')
    .required('Şifre tekrar zorunludur'),
});
