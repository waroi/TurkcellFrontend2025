'use client'
import { useUserProfile } from '@/hooks/useUserProfile';
import Title from "@/components/atoms/Title/Title";
import './UserInfoPage.scss';
import FormField from "@/components/molecules/FormField/FormField";
import Input from "@/components/atoms/Input/Input";
import { Col, Row } from "react-bootstrap";
import Button from "@/components/atoms/Buttons/Buttons";
import LevelTitle from "@/components/atoms/LevelTitle/LevelTitle";
import LevelDescription from "@/components/atoms/LevelDescription/LevelDescription";
import Switch from "@/components/atoms/Switch/Switch";
import { useTranslations } from "next-intl";

const UserInfoPage = () => {
    const userTranslate = useTranslations("User");
    const messages = useTranslations("messages");
    const forms = userTranslate.raw("forms");
    const level1 = userTranslate.raw("level1");
    const level2 = userTranslate.raw("level2");
    const { formik, loading, message } = useUserProfile()

    if (loading) {
        return <div>{messages.raw("loading")}</div>
    }

    return (
        <div id="user-info-page" className="ps-lg-5">
            <Title className='fw-bold title' as='h3'>
                {userTranslate.raw("title")}
            </Title>
            <Title className="fw-bold sub-title fs-5" as="h4">
                {userTranslate.raw("subTitle")}
            </Title>

            <form onSubmit={formik.handleSubmit}>
                <div className="user-info-forms">
                    <Row>
                        <Col lg={6}>
                            <FormField
                                id="name"
                                placeholder={forms.name}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.name}
                                touched={formik.touched.name}
                            >
                                <Input
                                    id="name"
                                    name="name"
                                    className="form-control-lg"
                                    placeholder={forms.name}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </FormField>
                        </Col>
                        <Col lg={6}>
                            <FormField
                                id="surName"
                                placeholder={forms.surName || "SurName"}
                                value={formik.values.surName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.surName}
                                touched={formik.touched.surName}
                            >
                                <Input
                                    id="surName"
                                    name="surName"
                                    className="form-control-lg"
                                    placeholder={forms.surName || "SurName"}
                                    value={formik.values.surName}
                                    onChange={formik.handleChange}
                                />
                            </FormField>
                        </Col>
                        <Col lg={6}>
                            <FormField
                                id="email"
                                placeholder={forms.email}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.email}
                                touched={formik.touched.email}
                                disabled
                            >
                                <Input
                                    id="email"
                                    name="email"
                                    disabled
                                    className="form-control-lg"
                                    placeholder={forms.email}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </FormField>
                        </Col>
                        <Col lg={6}>
                            <FormField
                                id="mobilePhone"
                                placeholder={forms.phoneNumber}
                                error={formik.errors.phoneNumber}
                                touched={formik.touched.phoneNumber}
                            >
                                <div className="d-flex w-100 gap-3">
                                    <div className="w-25">
                                        <select
                                            className="form-select form-select-lg fw-bold select-country-code"
                                            aria-label="Select Country Code"
                                            name="countryCode"
                                            value={formik.values.countryCode}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+3">+3</option>
                                            <option value="+4">+4</option>
                                        </select>
                                        {formik.errors.countryCode && formik.touched.countryCode && (
                                            <div className="text-danger">{formik.errors.countryCode}</div>
                                        )}
                                    </div>
                                    <div className="w-75">
                                        <Input
                                            id="mobilePhone"
                                            name="phoneNumber"
                                            className="w-100 form-control-lg rounded"
                                            placeholder="Your Phone Number"
                                            value={formik.values.phoneNumber}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                            <div className="text-danger">{formik.errors.phoneNumber}</div>
                                        )}
                                    </div>
                                </div>
                            </FormField>
                        </Col>
                        <Col lg={6}>
                            <FormField
                                id="country"
                                error={formik.errors.country}
                                touched={formik.touched.country}
                            >
                                <select
                                    className="form-select form-select-lg mb-3"
                                    aria-label="Country selection"
                                    name="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="South Korea (+82)">South Korea (+82)</option>
                                    <option value="United States (+1)">United States (+1)</option>
                                    <option value="Japan (+81)">Japan (+81)</option>
                                    <option value="China (+86)">China (+86)</option>
                                </select>
                                {formik.errors.country && formik.touched.country && (
                                    <div className="text-danger">{formik.errors.country}</div>
                                )}
                            </FormField>
                        </Col>
                        <Col lg={6}>
                            <div className="d-flex gap-3">
                                <div className="w-50">
                                    <FormField
                                        id="gender"
                                        error={formik.errors.gender}
                                        touched={formik.touched.gender}
                                    >
                                        <select
                                            className="form-select form-select-lg mb-3"
                                            aria-label="Gender selection"
                                            name="gender"
                                            value={formik.values.gender}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        {formik.errors.gender && formik.touched.gender && (
                                            <div className="text-danger">{formik.errors.gender}</div>
                                        )}
                                    </FormField>
                                </div>
                                <div className="w-50">
                                    <FormField
                                        id="date"
                                        error={formik.errors.date}
                                        touched={formik.touched.date}
                                    >
                                        <Input
                                            type="date"
                                            id="date"
                                            name="date"
                                            className="w-100 form-control-lg rounded"
                                            placeholder="DD/MM/YY"
                                            value={formik.values.date}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.date && formik.touched.date && (
                                            <div className="text-danger">{formik.errors.date}</div>
                                        )}
                                    </FormField>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Title className="fw-bold sub-title features-title fs-5" as="h4">
                        {userTranslate.raw("features")}
                    </Title>

                    <Row>
                        <Col lg={6} className="features-col">
                            <Title className="fw-bold features-sub-title" as="h6">
                                {level1.title}
                            </Title>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <LevelTitle>{level1.deposit}</LevelTitle>
                                <div className="form-check form-switch">
                                    <Input checked className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <LevelTitle>{level1.withdrawTitle}</LevelTitle>
                                <LevelDescription>{level1.withdrawValue}</LevelDescription>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <LevelTitle>{level1.cardPurchase}</LevelTitle>
                                <div className="form-check form-switch">
                                    <Input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <LevelTitle>{level1.bankDeposit}</LevelTitle>
                                <div className="form-check form-switch">
                                    <Input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="features-col">
                            <Title className="fw-bold features-sub-title" as="h6">
                                {level2.title}
                            </Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <strong className="level-title">{level2.fiatAndSpot}</strong>
                                <div className="form-check form-switch">
                                    <Switch checked id="switchCheckChecked" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <strong className="level-title">{level2.marginWallet}</strong>
                                <LevelDescription>{level2.marginWalletValue}</LevelDescription>
                            </div>
                        </Col>
                    </Row>

                    <div className="send-button">
                        {message && (
                            <div className={`alert alert-${message.includes("başarıyla") ? "success" : "danger"} mt-3`} role="alert">
                                {message}
                            </div>
                        )}
                    </div>
                    <Button
                        variant="primary-button"
                        fontSize="md"
                        className="border-1 px-5 update-button my-4"
                        height={48}
                        type="submit"
                    >
                        <span className='px-2'>{forms.updateButton}</span>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UserInfoPage