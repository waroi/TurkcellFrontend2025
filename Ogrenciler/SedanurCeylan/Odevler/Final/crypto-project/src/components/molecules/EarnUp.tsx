

import { useTranslations } from 'next-intl';
import Link from 'next/link';

const EarnUp = () => {
    const t = useTranslations('');

    return (
        <div className='d-flex align-items-center justify-content-between py-4'>
            <div>
                <h3 className='fs-32 text-white'>{t('earnUp_title')}</h3>
                <p className='fs-4 text-white'>{t('earnUp_desc')}</p>
            </div>
            <div>
                <Link href="/register" className="btn btn-surface d-flex align-items-center gap-2 rounded-5">
                    {t('earnUp_btn')}
                </Link>

            </div>
        </div>
    )
};

export default EarnUp;
