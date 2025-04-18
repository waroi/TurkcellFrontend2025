'use client'

import RockieSlider from "@/components/organism/RockieSlider/RockieSlider"
import './WhatIsRockie.scss'
import Title from "@/components/atoms/Title/Title"
import Paragraph from "@/components/atoms/Paragraph/Paragraph"
import Icon from "@/components/atoms/Icons/Icons"
import Button from "@/components/atoms/Buttons/Buttons"
import { useTranslations } from "next-intl"

const WhatIsRockie = () => {
    const t = useTranslations("HomePage")
    const wiRockie = t.raw("WhatIsRockie")
    return (
        <div className="w-100 wir mt-5 p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <RockieSlider className="img-fluid slider-image" src="/images/homepage/what-is-rockie/image-3.png"
                            alt="What is rockie slider" />
                    </div>
                    <div className="col-lg-5">
                        <Title className="fs-2 fw-bold title" as="h3">{wiRockie.title}</Title>
                        <Paragraph className="description">
                            {wiRockie.description}
                        </Paragraph>
                        {wiRockie.steps.map((rockie: any) => (
                            <div key={rockie.title} className="wir-sub-col mt-2">
                                <div className="d-flex gap-3">
                                    <Icon collection={"fa"} name="FaCheckCircle" className="mt-3" size={20} color="#3772FF" />
                                    <Title className="fw-bold fs-5 mb-0 title" as="h3">{rockie.title}</Title>
                                </div>
                                <Paragraph className="description">
                                    {rockie.description}
                                </Paragraph>
                            </div>
                        ))}
                        <Button variant="primary-button"
                            fontSize="md"
                            className="border-1 px-5 mt-3 hero-button"
                            height={48}
                            onClick={() => null}>
                            <span className='px-2'>{wiRockie.buttonText}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIsRockie