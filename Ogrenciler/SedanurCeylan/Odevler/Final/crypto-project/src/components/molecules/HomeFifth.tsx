

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HomeFifth = () => {
    const t = useTranslations('');

    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center g-5">

                    <div className="col-12 col-lg-6">
                        <Image
                            src="/rockie.png"
                            alt="rockie"
                            width={300}
                            height={300}
                            className="img-fluid w-100"
                        />
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="mb-4">
                            <h2>{t('rockie_title')}</h2>
                            <p className="text-secondary">{t('rockie_desc')}</p>
                        </div>

                        <div className="mb-3">
                            <div className="d-flex align-items-center gap-2">
                                <Image src="/tick.svg" alt="icon" width={20} height={20} />
                                <h6 className="mb-0">{t('rockie_first_title')}</h6>
                            </div>
                            <p className="text-secondary">{t('rockie_first_desc')}</p>
                        </div>

                        <div>
                            <div className="d-flex align-items-center gap-2">
                                <Image src="/tick.svg" alt="icon" width={20} height={20} />
                                <h6 className="mb-0">{t('rockie_second_title')}</h6>
                            </div>
                            <p className="text-secondary">{t('rockie_second_desc')}</p>
                        </div>
                        <button className='btn btn-primary text-white rounded-5 py-2 px-3'>{t('rockie_btn')}</button>
                    </div>

                </div>
            </div>
        </section>



    );
};

export default HomeFifth;
