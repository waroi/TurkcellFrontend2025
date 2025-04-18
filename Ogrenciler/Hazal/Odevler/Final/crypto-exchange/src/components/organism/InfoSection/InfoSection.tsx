'use client'

import Button from "@/components/atoms/Buttons/Buttons"
import './InfoSection.scss'
import Title from "@/components/atoms/Title/Title"
import Paragraph from "@/components/atoms/Paragraph/Paragraph"
import { useTranslations } from "next-intl"

const InfoSection = () => {
    const t = useTranslations("HomePage")
    const info = t.raw("Info")
    return (
        <div className="w-100 info-section pb-4">
            <div className="container">
                <div className="info-main d-flex justify-content-between align-items-center">
                    <div className="message">
                        <Title as="h6" className="fs-4 fw-bold title">
                            {info.title}
                        </Title>
                        <Paragraph className="description">
                            {info.description}
                        </Paragraph>
                    </div>
                    <Button variant="primary-button"
                        fontSize="md"
                        className="border-1 px-4 info-button bg-white"
                        height={48}
                        onClick={() => null}>
                        <span className='px-2'>{info.buttonText}</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InfoSection