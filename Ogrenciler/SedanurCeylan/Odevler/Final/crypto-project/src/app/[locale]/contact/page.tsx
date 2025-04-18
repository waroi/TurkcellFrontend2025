'use client';

import { useTranslations } from 'next-intl';
import PageContainer from '@/components/PageContainer';
import EarnUp from '@/components/molecules/EarnUp';
import ContactHeader from '@/components/molecules/ContactHeader';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

const Contact = () => {
    const t = useTranslations();
    const pathname = usePathname();

    return (
        <section>
            <Navbar />
            <PageContainer bgColor="bg-surface">
                <ContactHeader />
            </PageContainer>

            <div className="container mb-7">
                <div className="row">
                    <div className="col-md-3">
                        <div className="rounded-4 px-4 py-3 bg-light">
                            <ul className="list-group list-group-flush gap-2">
                                <li className={`list-group-item border-0 ps-3 ${pathname === '/about' ? 'bg-primary rounded-5 text-white' : ''}`}>
                                    <Link href="/about" className="text-decoration-none d-block text-reset px-3">
                                        {t('about_contact')}
                                    </Link>
                                </li>
                                <li className={`list-group-item border-0 ps-3 ${pathname === '/contact' ? 'bg-primary rounded-5 text-white' : ''}`}>
                                    <Link href="/contact" className="text-decoration-none d-block text-white bg-primary rounded-5 py-2 px-3">
                                        {t('contact_about')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-9 border-start ps-4">
                        <div className="rounded-4 p-4 shadow-sm bg-surface">
                            <h4 className="mb-4">{t('contact_title_contact')}</h4>
                            <p>{t('contact_text')}</p>

                            <ul className="mt-3 mb-4">
                                <li>{t('email_contact')}: sdnrcyln2@gmail.com</li>
                                <li>{t('phone_contact')}: +90 507 527 35 25</li>
                            </ul>

                            <div className="d-flex gap-3 mt-4">
                                <a href="https://www.linkedin.com/in/sedanur-ceylan-190702/" target="_blank" rel="noopener noreferrer">
                                    <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
                                </a>
                                <a href="https://github.com/SedanurCeylan" target="_blank" rel="noopener noreferrer">
                                    <Image src="/github.svg" alt="GitHub" width={32} height={32} />
                                </a>
                            </div>
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

export default Contact;
