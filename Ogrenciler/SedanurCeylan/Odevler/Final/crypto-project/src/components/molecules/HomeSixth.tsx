import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HomeSixth = () => {
    const t = useTranslations('');

    return (
        <section className="pt-5 py-0">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6">
                        <div className="mb-4">
                            <h2 className='fs-1 fw-bold'>{t('six_title')}</h2>
                            <p className="text-secondary fs-3">{t('six_desc')}</p>
                        </div>

                        <div className="mb-3">
                            <div className="d-flex align-items-center gap-2">
                                <Image src="/tick.svg" alt="icon" width={20} height={20} />
                                <h6 className="mb-0 fs-2 fw-bold">{t('six_first_title')}</h6>
                            </div>
                            <p className="text-secondary fs-4">{t('six_first_desc')}</p>
                        </div>

                        <div>
                            <div className="d-flex align-items-center gap-2">
                                <Image src="/tick.svg" alt="icon" width={20} height={20} />
                                <h6 className="mb-0 fs-2 fw-bold">{t('six_second_title')}</h6>
                            </div>
                            <p className="text-secondary fs-4">{t('six_second_desc')}</p>
                        </div>
                        <div className='d-flex gap-3 mt-4'>
                            <span>
                                <Image
                                    src="/googleplay.svg"
                                    alt="googleplay"
                                    width={135}
                                    height={40}
                                />
                            </span>
                            <span>
                                <Image
                                    src="/apstore.svg"
                                    alt="apstore"
                                    width={120}
                                    height={40}
                                />
                            </span>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <Image
                            src="/sixth.svg"
                            alt="six"
                            width={716}
                            height={540}
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSixth;
