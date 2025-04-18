import * as Yup from "yup";

const loginSchema = Yup.object({
    email: Yup.string()
        .when('selectedTab', {
            is: 'email',
            then: (schema) => schema.email('Invalid email format').required('Email is required'),
            otherwise: (schema) => schema
        }),
    mobilePhone: Yup.string()
        .when('selectedTab', {
            is: 'mobile',
            then: (schema) => schema.required('Mobile phone is required').matches(/^[0-9]+$/, 'Mobile phone should contain only numbers'),
            otherwise: (schema) => schema
        }),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
})

export default loginSchema