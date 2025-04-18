'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HomeSeventh = () => {
    const t = useTranslations();

    return (
        <section className="container py-8">
            <div className="row align-items-center">
                <div className="col-lg-6 text-lg-start text-center mb-4 mb-lg-0 pe-lg-10">
                    <h2 className="fw-bold fs-1">{t('custom_title')}</h2>
                    <h5 className="fw-semibold mt-3 fs-3">{t('custom_subtitle')}</h5>
                    <p className="text-secondary my-3 fs-4">{t('custom_desc')}
                    </p>
                    <div className="d-flex align-items-center gap-2 my-4">
                        <div className="rounded-circle bg-secondary-subtle" style={{ width: 48, height: 48 }}></div>
                        <div className="rounded-circle bg-secondary-subtle" style={{ width: 48, height: 48 }}></div>
                        <div className="rounded-circle bg-secondary-subtle" style={{ width: 48, height: 48 }}></div>
                        <div className="rounded-circle bg-secondary-subtle" style={{ width: 48, height: 48 }}></div>
                    </div>
                    <span className="fw-bold text-primary">30+</span> <span className="text-secondary">{t('custom_custom')}</span>
                </div>

                <div className="col-lg-6">
                    <div className="p-5 rounded-4 position-relative shadow-sm bg-white" style={{ borderLeft: '5px solid #2563eb' }}>
                        <p className="fs-2 fw-medium mb-4">
                            {t('custom_comment')}
                        </p>
                        <div className="d-flex align-items-center gap-3">
                            <div className="rounded-circle bg-secondary-subtle" style={{ width: 48, height: 48 }}></div>
                            <div>
                                <strong>Johnny Andro</strong>
                                <p className="text-secondary mb-0" style={{ fontSize: '14px' }}> {t('custom_comment_title')}</p>
                            </div>
                            <div className="ms-auto">
                                <Image src="/customlogo.png" alt="logo" width={112} height={25} />
                            </div>
                        </div>
                        <span className="position-absolute top-0 end-0 text-primary fs-1" style={{ transform: 'translate(20%, -40%)' }}>
                            ””
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSeventh;