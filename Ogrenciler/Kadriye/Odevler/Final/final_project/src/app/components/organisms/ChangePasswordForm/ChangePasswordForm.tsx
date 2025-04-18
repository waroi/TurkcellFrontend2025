import "./style.scss"
import { getTranslations } from 'next-intl/server'
import H2 from '../../atoms/H2/H2'
import H3 from '../../atoms/H3/H3'
import Form from 'next/form'
import { changePassword } from '@/app/posts/actions'
import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'
import Link from 'next/link'
import ButtonItem from '../../atoms/ButtonItem/ButtonItem'
import UserItem from "../../molecules/UserItem/UserItem"

const ChangePasswordForm = async () => {
    const t = await getTranslations('Profile.form')
    return (
        <div className="password-container">
            <UserItem />
            <div className='change-password'>
                <H2 text={t('title')} />
                <H3 text={t('inner_title')} />
                <Form action={changePassword} >
                    <div >
                        <Label id={t('old')} title={t('old')} ></Label>
                        <Input id={t('old')} placeholder={""} type="password" />
                    </div>
                    <div>
                        <Label id={t('2fa')} title={t('2fa')} ></Label>
                        <Input id={t('2fa')} placeholder={""} type="number" />
                    </div>
                    <div >
                        <Label id={t('new')} title={t('new')} ></Label>
                        <Input id={t('new')} placeholder={""} type="password" />
                    </div>
                    <div>
                        <Label id={t('confirm')} title={t('confirm')} ></Label>
                        <Input id={t('confirm')} placeholder={""} type="password" />
                    </div>
                    <ButtonItem type="submit" text={t('btn_text')} classProps="primary submit" />
                </Form>
            </div></div>
    )
}

export default ChangePasswordForm