'use client'

import Button from '@/components/atoms/Buttons/Buttons'
import './HeroSection.scss'
import Title from '@/components/atoms/Title/Title'
import Paragraph from '@/components/atoms/Paragraph/Paragraph'
import PartnersLogos from '@/components/molecules/PartnerLogos/PartnerLogos'
import SubHero from '@/components/organism/SubHero/SubHero'
import Image from 'next/image'
import { useHeroSection } from '@/hooks/useHeroSection'

const HeroSection = () => {
    const { mainImagePath, partners, info } = useHeroSection()

    return (
        <>
            <div className='hero w-100'>
                <div className='container'>
                    <div className='row hero-row'>
                        <div className="col-lg-6 p-5 hero-left-section">
                            <Title className='fs-1 hero-title' as='h1'>{info.title}</Title>
                            <Paragraph className='hero-description fs-6'>
                                {info.description}
                            </Paragraph>
                            <Button
                                variant="primary-button"
                                fontSize="md"
                                className="border-1 px-4 hero-button"
                                height={48}
                                onClick={() => null}
                            >
                                <span className='px-2'>{info.buttonText}</span>
                            </Button>
                            <PartnersLogos text={info.partner} partners={partners} />
                        </div>
                        <div className="col-lg-6 text-lg-end p-5">
                            <Image
                                src={`${mainImagePath}.webp`}
                                alt="Hero Picture"
                                width={570}
                                height={448}
                                className='img-fluid'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="subhero-main w-100">
                <div className="container mt-3">
                    <SubHero />
                </div>
                <div className="simplex-background"></div>
            </div>
        </>
    )
}

export default HeroSection