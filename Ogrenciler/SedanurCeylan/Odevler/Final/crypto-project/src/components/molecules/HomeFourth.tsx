import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HomeFourth = () => {
    const t = useTranslations('');

    return (
        <section className="py-5 text-center">
            <div className="container">
                <div className="mb-5">
                    <h1>{t('four_title')}</h1>
                    <p className="text-secondary">{t('four_desc')}</p>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="d-flex flex-column align-items-center h-100 px-3">
                            <Image
                                src="/step1.svg"
                                alt="step1"
                                width={96}
                                height={96}
                                className="mb-3 img-fluid"
                            />
                            <span className="fw-semibold">{t('step1')}</span>
                            <h6 className="fw-bold mt-2">{t('step1_title')}</h6>
                            <p className="text-secondary">{t('step1_desc')}</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex flex-column align-items-center h-100 px-3">
                            <Image
                                src="/step2.svg"
                                alt="step2"
                                width={96}
                                height={96}
                                className="mb-3 img-fluid"
                            />
                            <span className="fw-semibold">{t('step2')}</span>
                            <h6 className="fw-bold mt-2">{t('step2_title')}</h6>
                            <p className="text-secondary">{t('step2_desc')}</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex flex-column align-items-center h-100 px-3">
                            <Image
                                src="/step3.svg"
                                alt="step3"
                                width={96}
                                height={96}
                                className="mb-3 img-fluid"
                            />
                            <span className="fw-semibold">{t('step3')}</span>
                            <h6 className="fw-bold mt-2">{t('step3_title')}</h6>
                            <p className="text-secondary">{t('step3_desc')}</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex flex-column align-items-center h-100 px-3">
                            <Image
                                src="/step4.svg"
                                alt="step4"
                                width={96}
                                height={96}
                                className="mb-3 img-fluid"
                            />
                            <span className="fw-semibold">{t('step4')}</span>
                            <h6 className="fw-bold mt-2">{t('step4_title')}</h6>
                            <p className="text-secondary">{t('step4_desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFourth;
