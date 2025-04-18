'use client'

import BreadCrumb from "@/components/molecules/BreadCrumb/BreadCrumb"
import "./Login.scss"
import Title from "@/components/atoms/Title/Title"
import Paragraph from "@/components/atoms/Paragraph/Paragraph"
import { useState } from "react"
import Button from "@/components/atoms/Buttons/Buttons"
import Input from "@/components/atoms/Input/Input"
import Link from "next/link"
import { Image } from "react-bootstrap"
import { useFormik } from "formik"
import FormField from "@/components/molecules/FormField/FormField"
import loginSchema from "@/schemas/loginSchema"
import { useTranslations } from "next-intl"
import UserService from "@/services/userService"
import { useRouter } from "next/navigation"

const LoginOrganism = () => {
    const [selectedTab, setSelectedTab] = useState("email")
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const translate = useTranslations("Login")
    const forms = translate.raw("forms")
    const formik = useFormik({
        initialValues: {
            selectedTab,
            email: "",
            mobilePhone: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: async (values: any) => {
            setLoading(true)
            setError(null)
            let result
            try {
                result = await UserService.loginWithEmail(values.email, values.password)

                if (result.error) {
                    setError(result.error)
                } else { router.push("/dashboard") }
            } catch (error: any) {
                setError(error.message || "Giriş sırasında bir hata oluştu")
            } finally {
                setLoading(false)
            }
        }
    })
    const handleTabChange = (tab: any) => {
        setSelectedTab(tab)
        formik.setFieldValue("selectedTab", tab)
    }
    return (
        <div>
            <div className="page-top">
                <BreadCrumb title={translate.raw("short")} path={translate.raw("path")} />
            </div>
            <div className="container main-container">
                <Title as="h2" className="fw-bold fs-2 main-title text-center">
                    {translate.raw("title")}
                </Title>
                <Paragraph className="description text-center">
                    {translate.raw("subTitle")}
                </Paragraph>
                <div>
                    <div className="login-url d-flex w-100 h-100 align-items-center justify-content-center">
                        <Paragraph className="mb-0 py-3 fw-bold">
                            <span className="text-success">https://</span>accounts.rockie.com/login
                        </Paragraph>
                    </div>
                </div>

                <div className="justify-content-center tab-box d-flex gap-2">
                    <Button variant="tab-button"
                        className="tab-button px-4"
                        isActive={selectedTab === 'email'}
                        onClick={() => setSelectedTab('email')}
                        fontSize={"md"}
                        height={35}>
                        {translate.raw("tabs").email}
                    </Button>
                    <Button
                        variant="tab-button"
                        className="tab-button px-4"
                        isActive={selectedTab === 'mobile'}
                        onClick={() => setSelectedTab('mobile')}
                        fontSize="md"
                        height={35}>
                        {translate.raw("tabs").phone}
                    </Button>
                </div>

                <div className="form-fields mx-auto">
                    <form onSubmit={formik.handleSubmit}>
                        <div className={`${selectedTab === "mobile" ? "d-block" : "d-none"}`}>
                            <FormField
                                id="mobilePhone"
                                label={forms.phoneLabel}
                                placeholder={forms.phonePlaceholder}
                                value={formik.values.mobilePhone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.mobilePhone}
                                touched={formik.touched.mobilePhone}
                            >
                                <div className="d-flex w-100 gap-3">
                                    <div>
                                        <select
                                            className="form-select form-select-lg fw-bold h-100 select-country-code"
                                            aria-label="Select Country Code"
                                            name="countryCode"
                                            value={formik.values.countryCode}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="+1">
                                                <Image src="/images/homepage/our-customers/circle.png" width={32} height={32} alt="Country Flag" loading="lazy" /> +1
                                            </option>
                                            <option value="+2">+2</option>
                                            <option value="+3">+3</option>
                                            <option value="+4">+4</option>
                                        </select>
                                    </div>
                                    <Input
                                        id="mobilePhone"
                                        className="form-control-lg rounded"
                                        placeholder={forms.phonePlaceholder}
                                        value={formik.values.mobilePhone}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </FormField>
                        </div>

                        <div className={`${selectedTab === "email" ? "d-block" : "d-none"}`}>
                            <FormField
                                id="email"
                                label={forms.emailLabel}
                                placeholder={forms.emailPlaceholder}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.email}
                                touched={formik.touched.email}
                            >
                                <Input
                                    id="email"
                                    className="form-control-lg"
                                    placeholder={forms.emailPlaceholder}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </FormField>
                        </div>

                        <FormField
                            id="password"
                            label={forms.passwordLabel}
                            type="password"
                            className="mb-0 passwordField"
                            placeholder={forms.passwordPlaceholder}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.password}
                            touched={formik.touched.password}
                        />
                        <div className="send-button">
                            {error && <div className="alert alert-danger mt-3" role="alert">
                                {error}
                            </div>}
                            <Button
                                variant="primary-button"
                                fontSize="md"
                                type="submit"
                                className="border-1 px-4 hero-button w-100 mt-5"
                                height={48}
                            >
                                <span className='px-2'>{loading ? "Kontrol ediliyor..." : translate.raw("buttonText")}</span>
                            </Button>
                        </div>
                    </form>
                    <div className="duhacc d-flex justify-content-center gap-1">
                        <Paragraph>{translate.raw("message")}</Paragraph>
                        <Link href={"/register"} className="fw-bold text-decoration-none text-primary fw-bold">{translate.raw("markMessage")}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginOrganism