import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string()
        .email('Geçerli bir email giriniz.')
        .required('Email zorunludur'),
    password: Yup.string().required('Şifre zorunludur'),
});
