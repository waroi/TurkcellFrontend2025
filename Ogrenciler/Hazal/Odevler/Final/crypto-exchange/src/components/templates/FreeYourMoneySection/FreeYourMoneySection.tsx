'use client'

import Paragraph from "@/components/atoms/Paragraph/Paragraph"
import Title from "@/components/atoms/Title/Title"
import './FreeYourMoneySection.scss'
import Icon from "@/components/atoms/Icons/Icon"
import { useEffect, useState } from "react"
import { useTheme } from "@/contexts/ThemeContext"
import { useTranslations } from "next-intl"
import Image from "next/image"

const FreeYourMoneySection = () => {
    const [mainImagePath, setMainImagePath] = useState<string>("/images/homepage/free-your-money/main")
    const t = useTranslations("HomePage")
    const fymData = t.raw("FreeYourMoney")
    const { theme } = useTheme()

    useEffect(() => {
        theme === "dark" ? setMainImagePath((prev) => prev + "-dark") : setMainImagePath("/images/homepage/free-your-money/main")
    }, [theme])

    return (
        <div className="w-100 p-5 freeyourmoney pb-0 mb-5">
            <div className="container">
                <div className="row freeyourmoney-row">
                    <div className="col-lg-6 freeyourmoney-left-col">
                        <div className="pe-lg-5">
                            <Title className="fs-2 fw-bold title me-lg-5" as="h3">
                                {fymData.title}
                            </Title>
                        </div>
                        <Paragraph className="description">
                            {fymData.description}
                        </Paragraph>
                        {fymData.steps.map((step: any) => (
                            <div key={step.title} className="freeyourmoney-col mt-2">
                                <div className="d-flex gap-3">
                                    <Icon collection={"fa"} name="FaCheckCircle" className="mt-3" size={20} color="#3772FF" />
                                    <Title className="fw-bold fs-5 mb-0 title" as="h3">
                                        {step.title}
                                    </Title>
                                </div>
                                <Paragraph className="description">
                                    {step.description}
                                </Paragraph>
                            </div>
                        ))}
                        <Image src={'/images/homepage/free-your-money/app-store.png'} height={40} width={270} alt="App Store and Play Store Logo" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="col-lg-6 freeyourmoney-right-col mt-5 pt-2">
                        <Image width={500} height={500} src={`${mainImagePath}.png`} className="img-fluid" alt="App Download Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeYourMoneySection