import { cookies } from "next/headers"
import ImageItem from "../../atoms/ImageItem/ImageItem"
import "./style.scss"
import H4 from "../../atoms/H4/H4"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem"
import { getTranslations } from "next-intl/server"

const UserItem = async () => {
    const cookieStore = await cookies()
    const userData = cookieStore.get('current_user')
    if (userData?.value == null || userData?.value == "") {
        return
    }
    const user = JSON.parse(userData.value);
    const t = await getTranslations('Profile.side_menu');
    return (
        <div className="user-item">
            <div className="top">
                <ImageItem src={user.providerData[0].photoURL == null ? "/assets/images/empty_avatar.svg" : user.providerData[0].photoURL} width={120} height={120} alt="user image" />
                <H4 text={user.providerData[0].displayName} />
                <span>{user.email}</span>
            </div>
            <div className="bottom">
                <ButtonItem text={t('user')} />
                <ButtonItem text={t('ref')} />
                <ButtonItem text={t('api')} />
                <ButtonItem text={t('history')} />
                <ButtonItem text={t('2fa')} />
                <ButtonItem text={t('password')} classProps="primary" />
            </div>
        </div>
    )
}

export default UserItem