import * as Yup from "yup";

const registrationSchema = Yup.object({
    email: Yup.string()
        .when('selectedTab', {
            is: 'email',
            then: (schema) => schema.email('Invalid email format').required('Email is required'),
            otherwise: (schema) => schema
        }),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, 'Phone number should contain only numbers'),
    mobilePhone: Yup.string()
        .when('selectedTab', {
            is: 'mobile',
            then: (schema) => schema.required('Mobile phone is required').matches(/^[0-9]+$/, 'Mobile phone should contain only numbers'),
            otherwise: (schema) => schema
        }),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    nickname: Yup.string()
        .required('Nickname is required')
        .matches(/^[a-zA-Z0-9_]+$/, 'Nickname should not contain special characters'),
    country: Yup.string()
        .required('Country is required'),
    uidCode: Yup.string()
})

export default registrationSchema