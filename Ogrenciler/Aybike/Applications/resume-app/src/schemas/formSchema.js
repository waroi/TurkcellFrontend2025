import * as yup from 'yup';

export const formSchema = yup.object().shape({

    email: yup.string()
        .email('Please enter a valid email')
        .required('Email is required'),

    firstName: yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 3 characters long'),

    lastName: yup.string()
        .required('Lastname is required')
        .min(2, 'Name must be at least 3 characters long'),

    country: yup.string()
        .required('Lütfen ülke seçiniz'),

    city: yup.string()
        .required('Lütfen şehir seçiniz'),

    university: yup.string()
        .required('Lütfen üniversite seçiniz'),

    graduationStatus: yup.boolean(),

    graduationYear: yup.string(),

    department: yup.string()
        .required('Lütfen bölüm seçiniz'),

    gpa: yup.number()
        .positive('Lütfen geçerli bir ortalama seçiniz')
        .lessThan(4.0, 'Ortalamanız 4.0 dan küçük olmalıdır')

});





