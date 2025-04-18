'use client';

import { useTranslations } from 'next-intl';
import PageContainer from '@/components/PageContainer';
import EarnUp from '@/components/molecules/EarnUp';
import AboutHeader from '@/components/molecules/AboutHeader';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '../../../components/Navbar';

const About = () => {
    const t = useTranslations();
    const pathname = usePathname();

    return (
        <section>
            <Navbar />
            <PageContainer bgColor="bg-surface">
                <AboutHeader />
            </PageContainer>

            <div className="container mb-7">
                <div className="row">
                    <div className="col-md-3">
                        <div className="rounded-4 px-4 py-3 bg-light">
                            <ul className="list-group list-group-flush gap-2">
                                <li className={`list-group-item border-0 ps-3 ${pathname === '/about' ? 'bg-primary rounded-5 text-white' : ''}`}>
                                    <Link href="/about" className="text-decoration-none d-block text-white bg-primary rounded-5 py-2 px-3">
                                        {t('about_contact')}
                                    </Link>
                                </li>
                                <li className={`list-group-item border-0 ps-3 ${pathname === '/contact' ? 'bg-primary rounded-5 text-white ' : ''}`}>
                                    <Link href="/contact" className="text-decoration-none d-block text-reset px-3">
                                        {t('contact_about')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-9 border-start ps-4">
                        <div className="rounded-4 p-4 shadow-sm bg-surface">
                            <h4 className="mb-4">{t('about_title_')}</h4>
                            <p>{t('about_text')}</p>
                            <p>{t('about_text2')} <a href="https://github.com/SedanurCeylan/TurkcellFinal.git"> Repo Linki</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <PageContainer bgColor="bg-foto">
                <EarnUp />
            </PageContainer>
        </section>
    );
};

export default About;
