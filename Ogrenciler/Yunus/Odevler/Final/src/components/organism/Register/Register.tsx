'use client'

import BreadCrumb from "@/components/molecules/BreadCrumb/BreadCrumb";
import "./Register.scss";
import Title from "@/components/atoms/Title/Title";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import Button from "@/components/atoms/Buttons/Buttons";
import Input from "@/components/atoms/Input/Input";
import Link from "next/link";
import FormField from "@/components/molecules/FormField/FormField";
import { useTranslations } from "next-intl";
import { useRegisterForm } from "@/hooks/useRegisterForm";

const RegisterOrganism = () => {
    const translate = useTranslations("Register")
    const forms = translate.raw("forms")
    const {
        selectedTab,
        loading,
        error,
        formik,
        handleTabChange
    } = useRegisterForm(forms, translate)

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
                <div className="justify-content-center tab-box d-flex gap-2">
                    <Button
                        variant="tab-button"
                        className="tab-button px-4"
                        isActive={selectedTab === 'email'}
                        onClick={() => handleTabChange('email')}
                        fontSize={"md"}
                        height={35}
                    >
                        {translate.raw("tabs").email}
                    </Button>
                    <Button
                        variant="tab-button"
                        className="tab-button px-4"
                        isActive={selectedTab === 'mobile'}
                        onClick={() => handleTabChange('mobile')}
                        fontSize="md"
                        height={35}
                    >
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
                                <div className="d-flex w-100">
                                    <div className="pe-4">
                                        <select
                                            className="form-select form-select-lg fw-bold h-100 select-country-code"
                                            aria-label="Select Country Code"
                                            name="countryCode"
                                            value={formik.values.countryCode}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="+1">
                                            </option>
                                            <option value="+2">+2</option>
                                            <option value="+3">+3</option>
                                            <option value="+4">+4</option>
                                        </select>
                                    </div>
                                    <Input
                                        id="mobilePhone"
                                        className="form-control-lg rounded"
                                        placeholder="Your Phone Number"
                                        value={formik.values.mobilePhone}
                                        onChange={formik.handleChange}
                                    />
                                    <button type="button" className="input-group-text" id="authenticate-button">Authenticate</button>
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
                                <button type="button" className="input-group-text" id="authenticate-button">{forms.authenticateButton}</button>
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
                            criticalMessage={forms.passwordCriticMessage}
                        />
                        <FormField
                            id="confirmPassword"
                            label=""
                            type="password"
                            placeholder={forms.reRenderPassPlaceholder}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.confirmPassword}
                            touched={formik.touched.confirmPassword}
                            className="mt-2"
                        />
                        <FormField
                            id="nickname"
                            label={forms.nickNameLabel}
                            placeholder={forms.nickNamePlaceHolder}
                            value={formik.values.nickname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.nickname}
                            touched={formik.touched.nickname}
                            criticalMessage={forms.nickNameCriticMessage}
                        />
                        <FormField
                            id="country"
                            label={forms.country}
                            error={formik.errors.country}
                            touched={formik.touched.country}
                        >
                            <select
                                className="form-select form-select-lg mb-3"
                                aria-label="Country selection"
                                name="country"
                                value={formik.values.country}
                                onChange={formik.handleChange}
                            >
                                <option value="South Korea (+82)">South Korea (+82)</option>
                                <option value="United States (+1)">United States (+1)</option>
                                <option value="Japan (+81)">Japan (+81)</option>
                                <option value="China (+86)">China (+86)</option>
                            </select>
                        </FormField>
                        <FormField
                            id="phone"
                            label={forms.phone}
                            placeholder="ex) 01012345678 (without '-')"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.phone}
                            touched={formik.touched.phone}
                            criticalMessage={forms.phoneCriticMessage}
                        />
                        <FormField
                            id="uidCode"
                            label={forms.uidCodeLabel}
                            placeholder={forms.uidCodePlaceholder}
                            value={formik.values.uidCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.uidCode}
                            touched={formik.touched.uidCode}
                        />
                        <div className="send-button">
                            {error && <div className="alert alert-danger mt-3" role="alert">
                                {error}
                            </div>}
                            <Button
                                variant="primary-button"
                                fontSize="md"
                                type="submit"
                                className="border-1 px-4 hero-button w-100"
                                height={48}
                            >
                                <span className='px-2'>{loading ? "Kaydediliyor..." : translate.raw("buttonText")}</span>
                            </Button>
                        </div>
                    </form>
                    <div className="duhacc d-flex justify-content-center gap-1">
                        <Paragraph>{translate.raw("message")}</Paragraph>
                        <Link href={"/login"} className="fw-bold text-decoration-none text-primary fw-bold">{translate.raw("markMessage")}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterOrganism