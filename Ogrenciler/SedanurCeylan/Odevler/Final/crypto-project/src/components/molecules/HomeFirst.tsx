

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HomeFirst = () => {
    const t = useTranslations('');

    return (
        <section className='py-9 container'>
            <div className="row align-items-center m-0">

                <div className="col-12 col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                    <h1 className="fw-bold fs-1">{t('title')}</h1>
                    <p className="mb-4">{t('description')}</p>
                    <button className="btn btn-primary mb-4 rounded-5 text-white py-2 px-3">{t('mainbtn')}</button>

                    <div className="d-flex flex-column align-items-center align-items-lg-start ">
                        <span className="mb-2 me-0">{t('partners')}</span>
                        <Image
                            src="/frame.svg"
                            alt="partners"
                            width={607}
                            height={28}
                            className="img-fluid"
                        />
                    </div>
                </div>

                <div className="col-12 col-lg-6 text-center">
                    <Image
                        src="/img1.svg"
                        alt="rocket"
                        width={570}
                        height={448}
                        className="img-fluid"
                    />
                </div>
            </div>
        </section>


    );
};

export default HomeFirst;
