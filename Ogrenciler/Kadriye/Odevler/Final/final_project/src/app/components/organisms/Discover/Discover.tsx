import "./style.scss"
import ImageItem from '../../atoms/ImageItem/ImageItem'
import H3 from '../../atoms/H3/H3'
import { useTranslations } from 'next-intl';
import P from '../../atoms/P/P';
import ButtonItem from '../../atoms/ButtonItem/ButtonItem';

const Discover = () => {
    const t = useTranslations('Account');
    return (
        <div className='discover'>

            <div className="container">
                <div className="text">
                    <H3 text={t('title')} />
                    <P text={t('text')} />
                </div>
                <ButtonItem text={t('btn_text')} />

            </div>
        </div>
    )
}

export default Discover