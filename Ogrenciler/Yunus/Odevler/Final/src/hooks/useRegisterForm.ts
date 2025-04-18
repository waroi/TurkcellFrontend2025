import { useState } from "react";
import { useFormik } from "formik";
import registrationSchema from "@/schemas/registrationSchema";
import UserService from "@/services/userService";
import { useRouter } from "next/navigation";

export function useRegisterForm(forms, translate) {
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