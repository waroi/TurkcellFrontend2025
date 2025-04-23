import * as Yup from 'yup';

export const emailLoginSchema = Yup.object({
  email: Yup.string()
    .email('Geçerli bir e-posta girin')
    .required('E-posta zorunludur'),
  password: Yup.string()
    .required('Şifre zorunludur')
    .min(8, 'Şifre en az 8 karakter olmalı'),
});

export const mobileLoginSchema = Yup.object({
  phoneNumber: Yup.string()
    .required('Telefon numarası zorunludur')
    .min(10, 'Telefon numarası en az 10 karakter olmalı'),
  password: Yup.string()
    .required('Şifre zorunludur')
    .min(8, 'Şifre en az 8 karakter olmalı'),
});

export const unifiedRegisterSchema = Yup.object({
  registerMethod: Yup.string()
    .oneOf(['email', 'mobile'])
    .required('Kayıt yöntemi zorunludur'),

  email: Yup.string().when('registerMethod', {
    is: 'email',
    then: (schema) =>
      schema
        .required('E-posta zorunludur')
        .email('Geçerli bir e-posta girin'),
    otherwise: (schema) => schema.notRequired(),
  }),

  phoneNumber: Yup.string().when('registerMethod', {
    is: 'mobile',
    then: (schema) =>
      schema
        .required('Telefon numarası zorunludur')
        .min(10, 'Telefon numarası en az 10 karakter olmalı'),
    otherwise: (schema) => schema.notRequired(),
  }),

  password: Yup.string()
    .required('Şifre zorunludur')
    .min(6, 'Şifre en az 6 karakter olmalı'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Şifreler eşleşmiyor')
    .required('Şifre tekrarı zorunludur'),

  name: Yup.string(),
  nickname: Yup.string(),
  country: Yup.string(),
  uidCode: Yup.string(),
  countryCode: Yup.string(),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email('Geçerli bir e-posta girin')
    .required('E-posta zorunludur'),
});
