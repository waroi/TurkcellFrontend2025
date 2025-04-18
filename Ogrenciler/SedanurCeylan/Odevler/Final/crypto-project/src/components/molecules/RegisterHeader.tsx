'use client';

import { useTranslations } from 'next-intl';

const RegisterHeader = () => {
    const t = useTranslations();

    return (
        <div className="d-flex justify-content-between py-5 mb-7 align-items-center">
            <h1>{t('register_page_title')}</h1>
            <div>{t('register_page_breadcrumb')}</div>
        </div>
    );
};

export default RegisterHeader;
