import * as Yup from 'yup';

export const registerSchema = (t: (key: string) => string) =>
    Yup.object({
        email: Yup.string()
            .email(t('register_email_invalid'))
            .required(t('register_email_required')),
        password: Yup.string()
            .min(8, t('register_password_min'))
            .matches(/[0-9]/, t('register_password_digit'))
            .required(t('register_password_required')),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], t('register_confirm_password_mismatch'))
            .required(t('register_confirm_password_required')),
        nickname: Yup.string()
            .matches(/^[a-zA-Z0-9]+$/, t('register_nickname_invalid'))
            .required(t('register_nickname_required')),
        phone: Yup.string()
            .matches(/^[0-9]+$/, t('register_phone_invalid'))
            .required(t('register_phone_required')),
        country: Yup.string().required(t('register_country_required')),
        uidCode: Yup.string().optional(),
    });
