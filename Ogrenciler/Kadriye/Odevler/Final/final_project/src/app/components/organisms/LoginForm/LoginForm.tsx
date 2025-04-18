import "./style.scss"
import SectionTitle from '../../molecules/SectionTitle/SectionTitle'
import FormTitle from '../../molecules/FormTitle/FormTitle'
import { getTranslations } from 'next-intl/server'
import ButtonItem from '../../atoms/ButtonItem/ButtonItem'
import Form from 'next/form'
import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'
import P from '../../atoms/P/P'
import Link from 'next/link'
import { login } from '@/app/posts/actions'

async function LoginForm() {
    const t = await getTranslations('Login')
    return (
        <div className="login-container">
            <SectionTitle section="LoginTop" />
            <div className="container ">
                <div className="login-form">
                    <div className="login-top">
                        <FormTitle title={t('title')} text={t('text')} />
                        <div className="buttons">
                            <ButtonItem text="Email" classProps="primary" />
                            <ButtonItem text="Mobile" />
                        </div>
                    </div>
                    <Form action={login}>
                        <div >
                            <Label id={'email'} title={t('email')} ></Label>
                            <Input id={'email'} placeholder={t('email_placeholder')} type="email" />
                        </div>
                        <div>
                            <Label id={'password'} title={t('password')} ></Label>
                            <Input id={'password'} placeholder={t('password_placeholder')} type="password" />
                        </div>
                        <div className="remember-container">
                            <div className="remember">
                                <Input id={"remember"} placeholder="" type="checkbox" required={false} />
                                <Label id={"remember"} title={t('remember')} ></Label>
                            </div>
                            <Link href="/" >{t('forgot')}</Link>
                        </div>
                        <ButtonItem type="submit" text={t('btn_text_pro')} classProps="primary submit" />
                    </Form>
                    <P text={t('account')} child={<Link href="/register" >{t('register')}</Link>} />
                </div>
            </div>
        </div>
    )
}

export default LoginForm