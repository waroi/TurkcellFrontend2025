import { getTranslations } from "next-intl/server"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem"
import H2 from "../../atoms/H2/H2"
import P from "../../atoms/P/P"
import "./style.scss"


const TableTitle = async () => {
    const t = await getTranslations('TableTitle')
    return (
        <div>
            <div className="head">
                <H2 text={t('title')} />
                <P text={t('text')} />
            </div>
            <div className="top">
                <ButtonItem text={t('view')} classProps="active" />
                <ButtonItem text="Metaverse" />
                <ButtonItem text={t('entertain')} />
                <ButtonItem text={t('energy')} />
                <ButtonItem text="NFT" />
                <ButtonItem text={t('gaming')} />
                <ButtonItem text={t('music')} />
            </div>
        </div>
    )
}

export default TableTitle