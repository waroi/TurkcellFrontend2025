'use client';

import { useTranslations } from 'next-intl';
import PageContainer from '@/components/PageContainer';
import EarnUp from '@/components/molecules/EarnUp';
import Navbar from '../../../components/Navbar';

const ComingSoon = () => {
    const t = useTranslations();

    return (
        <section className=''>
            <Navbar />
            <PageContainer bgColor="bg-white">
                <div className="container py-9 text-center my-10">
                    <h1 className="display-4 mb-4">{t('coming_soon_title')}</h1>
                    <p className="lead text-secondary">{t('coming_soon_desc')}</p>
                </div>
            </PageContainer>

            <PageContainer bgColor="bg-foto">
                <EarnUp />
            </PageContainer>
        </section>
    );
};

export default ComingSoon;
