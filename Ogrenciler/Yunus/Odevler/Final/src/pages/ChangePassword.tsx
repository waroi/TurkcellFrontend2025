'use client'
import { useFormik } from 'formik';
import Button from "@/components/atoms/Buttons/Buttons";
import Title from "@/components/atoms/Title/Title";
import FormField from "@/components/molecules/FormField/FormField";
import { useTranslations } from "next-intl";
import { Col, Row } from "react-bootstrap";
import Input from '@/components/atoms/Input/Input';
import { useChangePasswordForm } from '@/hooks/useChangePasswordForm';


const ChangePasswordTemplate = () => {
    const translate = useTranslations("User").raw("ChangePassword");
    const { formik, message } = useChangePasswordForm()

    return (
        <div className='change-password ps-lg-5'>
            <Title className='fw-bold title' as='h3'>
                {translate.title}
            </Title>
            <Title className="fw-bold sub-title fs-5" as="h4">
                {translate.subTitle}
            </Title>

            <form onSubmit={formik.handleSubmit}>
                <Row className="change-password-row">
                    <Col lg={6} className="change-password-col">
                        <FormField
                            id="oldpassword"
                            label={translate.forms.oldPassword}
                            placeholder={translate.forms.oldPassword}
                            type="password"
                            error={formik.errors.oldPassword}
                            touched={formik.touched.oldPassword}
                            criticalMessage="*:"
                        >
                            <Input
                                id="oldpassword"
                                name="oldPassword"
                                className="form-control-lg"
                                type="password"
                                placeholder={translate.forms.oldPassword}
                                value={formik.values.oldPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </FormField>
                    </Col>
                    <Col lg={6} className="change-password-col">
                        <FormField
                            disabled={true}
                            id="2FACODE"
                            label="2FA Code"
                            criticalMessage="*:"
                            placeholder="DISABLED"
                        />
                    </Col>
                    <Col lg={6} className="change-password-col">
                        <FormField
                            id="newpassword"
                            label={translate.forms.newPassword}
                            placeholder={translate.forms.newPassword}
                            type="password"
                            error={formik.errors.newPassword}
                            touched={formik.touched.newPassword}
                            criticalMessage="*:"
                        >
                            <Input
                                id="newpassword"
                                name="newPassword"
                                className="form-control-lg"
                                type="password"
                                placeholder={translate.forms.newPassword}
                                value={formik.values.newPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </FormField>
                    </Col>
                    <Col lg={6} className="change-password-col">
                        <FormField
                            id="confirmpassword"
                            label={translate.forms.confirmPassword}
                            placeholder={translate.forms.confirmPassword}
                            type="password"
                            error={formik.errors.confirmPassword}
                            touched={formik.touched.confirmPassword}
                            criticalMessage="*:"
                        >
                            <Input
                                id="confirmpassword"
                                name="confirmPassword"
                                className="form-control-lg"
                                type="password"
                                placeholder={translate.forms.confirmPassword}
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </FormField>
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
                    <span className='px-2'>{translate.buttonText}</span>
                </Button>
            </form>
        </div>
    )
}

export default ChangePasswordTemplate