import * as Yup from 'yup';

export const profileSchema = (t: (key: string) => string) =>
    Yup.object({
        currentPassword: Yup.string().required(t('profile_current_password_required')),
        newPassword: Yup.string()
            .min(8, t('register_password_min'))
            .matches(/[0-9]/, t('register_password_digit'))
            .required(t('register_password_required')),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword')], t('register_confirm_password_mismatch'))
            .required(t('register_confirm_password_required')),
    });
