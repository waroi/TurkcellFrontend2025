import Title from '@/components/atoms/Title/Title'
import './HowItWorks.scss'
import Paragraph from '@/components/atoms/Paragraph/Paragraph'
import { useTranslations } from 'next-intl'
import { Image } from "react-bootstrap";

const HowItWorks = () => {
    const t = useTranslations("HomePage")
    const howItWorks = t.raw("HowItWorks")
    return (
        <div className="howItWorks w-100 pb-5">
            <div className='container mt-5 pb-4'>
                <Title as='h1' className='fs-2 text-center fw-bold how-it-works-title'>
                    {howItWorks.title}
                </Title>
                <Paragraph className="how-it-work-description text-center fs-6">
                    {howItWorks.description}
                </Paragraph>
                <div className="row">
                    {howItWorks.steps.map((step: any) => (
                        <div key={step.path} className="col-lg-3 text-center">
                            <div className="d-flex flex-column align-items-center how-it-works-column">
                                <Image src={`/images${step.path}`} width={96} height={96} alt={step.label} loading='lazy' className='img-fluid text-center' />
                                <span className='text-center step'>
                                    STEP {step.step}
                                </span>
                                <Title as='h5' className='text-center title'>
                                    {step.label}
                                </Title>
                                <Paragraph className='text-center description'>
                                    {step.description}
                                </Paragraph>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HowItWorks