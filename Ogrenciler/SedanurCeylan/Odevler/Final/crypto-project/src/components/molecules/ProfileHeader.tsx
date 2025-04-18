'use client';

import { useTranslations } from 'next-intl';

const ProfileHeader = () => {
    const t = useTranslations();

    return (
        <div className="d-flex justify-content-between py-5 mb-6 align-items-center">
            <h1>{t('profile_page_title')}</h1>
            <div>{t('profile_page_breadcrumb')}</div>
        </div>
    );
};

export default ProfileHeader;
