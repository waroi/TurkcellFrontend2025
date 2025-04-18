import { useState } from "react";
import { useFormik } from "formik";
import UserService from "@/services/userService";
import { useRouter } from "next/navigation";
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

export function useRegisterForm(forms: any, translate: (key: string) => string) {
    const [selectedTab, setSelectedTab] = useState("email");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            selectedTab,
            email: "",
            mobilePhone: "",
            password: "",
            confirmPassword: "",
            nickname: "",
            country: "South Korea (+82)",
            phone: "",
            uidCode: "",
            countryCode: "+1"
        },
        validationSchema: registrationSchema,
        onSubmit: async (values: any) => {
            try {
                setLoading(true);
                setError(null)

                const { isAvailable } = await UserService.isNicknameAvailable(values.nickname)

                if (!isAvailable) {
                    setError('Bu kullanıcı adı zaten kullanılmakta.')
                    setLoading(false)
                    return
                }

                let result
                if (selectedTab === 'email') {
                    result = await UserService.registerWithEmail(values.email, values.password, {
                        nickname: values.nickname,
                        country: values.country,
                        phone: values.phone,
                        uidCode: values.uidCode
                    })
                } else {
                    result = await UserService.registerWithPhone(
                        values.countryCode + values.mobilePhone,
                        values.password,
                        {
                            nickname: values.nickname,
                            country: values.country,
                            phone: values.phone,
                            uidCode: values.uidCode
                        }
                    )
                }

                if (result.error) {
                    setError(result.error)
                } else {
                    router.push('/dashboard')
                }
            } catch (err: any) {
                setError(err.message || 'Kayıt sırasında bir hata oluştu.')
            } finally {
                setLoading(false)
            }
        }
    })

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
        formik.setFieldValue("selectedTab", tab)
    }

    return {
        selectedTab,
        loading,
        error,
        formik,
        handleTabChange
    }
}