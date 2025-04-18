import "./style.scss"
import { getTranslations } from "next-intl/server"
import FormTitle from "../../molecules/FormTitle/FormTitle"
import SectionTitle from "../../molecules/SectionTitle/SectionTitle"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem"
import Label from "../../atoms/Label/Label"
import Input from "../../atoms/Input/Input"
import P from "../../atoms/P/P"
import Link from "next/link"
import Form from 'next/form'
import { register } from "@/app/posts/actions"

const RegisterForm = async () => {
    const t = await getTranslations('Register')
    return (
        <>
            <div className="register-container">
                <SectionTitle section="RegisterTop" />
                <div className="container ">
                    <div className="register-form">
                        <div className="register-top">
                            <FormTitle title={t('title')} text={t('text')} />
                            <div className="buttons">
                                <ButtonItem text="Email" classProps="primary" />
                                <ButtonItem text="Mobile" />
                            </div>
                        </div>
                        <Form action={register}>
                            <div >
                                <Label id={'email'} title={t('email')} ></Label>
                                <div className="email">
                                    <Input id={'email'} placeholder={t('email_placeholder')} type="email" />
                                    <ButtonItem text={t('btn_text')} classProps="primary auth" />
                                </div>
                            </div>
                            <div>
                                <Label id={'password' + "2"} title={t('password')} ></Label>
                                <div>
                                    <Input id={'password'} placeholder={t('password_placeholder_1')} type="password" />
                                    <Input id={'password2'} placeholder={t('password_placeholder_2')} type="password" />
                                </div>
                            </div>
                            <div>
                                <Label id={'nick_name'} title={t('nick_name')} ></Label>
                                <Input id={'nick_name'} placeholder={t('nick_name_placeholder')} />
                            </div>
                            <div>
                                <Label id={'country'} title={t('country.0')} ></Label>
                                <select name="country" id="country">
                                    <option value={t('country.1')}>{t('country.1')}</option>
                                    <option value={t('country.2')}>{t('country.2')}</option>
                                    <option value={t('country.3')}>{t('country.3')}</option>
                                </select>
                            </div>
                            <div>
                                <Label id={'phone'} title={t('phone')} ></Label>
                                <Input id={'phone'} placeholder={t('phone_placeholder')} type="number" />
                            </div>
                            <div>
                                <Label id={t('UID')} title={t('UID')} ></Label>
                                <Input id={t('UID')} placeholder={t('UID_placeholder')} type="number" />
                            </div>
                            <ButtonItem type="submit" text={t('btn_text_pro')} classProps="primary submit" />
                        </Form>
                        <P text={t('account')} child={<Link href="/login" >{t('login')}</Link>} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm