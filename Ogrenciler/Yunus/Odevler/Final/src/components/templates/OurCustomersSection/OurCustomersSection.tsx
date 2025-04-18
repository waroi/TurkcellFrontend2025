import Title from "@/components/atoms/Title/Title"
import './OurCustomersSection.scss'
import Paragraph from "@/components/atoms/Paragraph/Paragraph"
import { Image } from "react-bootstrap"
import { useTranslations } from "next-intl"

const OurCustomersSection = () => {
    const t = useTranslations("HomePage")
    const customerData = t.raw("OurCustomers")
    return (
        <div className="our-customers w-100 pb-5 mb-5">
            <div className="container mb-3">
                <div className="row">
                    <div className="col-lg-6 our-customers-left-col">
                        <div className="pe-lg-5">
                            <div className="pe-lg-5">
                                <Title className="fs-2 fw-bold title me-lg-5" as="h3">
                                    {customerData.title}
                                </Title>
                            </div>
                            <Title className="fw-bold fs-5 mb-0 title sub" as="h3">
                                {customerData.subTitle}
                            </Title>
                            <div className="pe-lg-5">
                                <Paragraph className="description me-lg-5">
                                    {customerData.description}
                                </Paragraph>
                            </div>
                            <div className="circles d-flex gap-2">
                                {[1, 2, 3].map(circle => (
                                    <Image key={circle} src="/images/homepage/our-customers/circle.png" className="img-fluid" width={48} height={48} loading="lazy" alt="Profile Pictures" />
                                ))}
                            </div>
                            <Paragraph className="profile-desc d-flex gap-2 align-items-center">
                                <span className="text-primary fw-bold">
                                    30+
                                </span>
                                {customerData.reviewsText}
                            </Paragraph>
                        </div>
                    </div>
                    <div className="col-lg-6 our-customers-right-col p-5 pb-0">
                        <Paragraph className="description pe-5">
                            {customerData.rightSection.message}
                        </Paragraph>
                        <div className="d-flex justify-content-between align-items-center mt-5">
                            <div className="profile d-flex gap-3">
                                <Image src="/images/homepage/our-customers/circle.png" className="mt-2" width={44} height={44} loading="lazy" alt="Profile Pictures" />
                                <div className="ceo-info">
                                    <Title className="fs-5 fw-bold mb-0" as="h6">
                                        Johnny Andro
                                    </Title>
                                    <Paragraph>{customerData.rightSection.jobs}</Paragraph>
                                </div>
                            </div>
                            <Image src="/images/homepage/our-customers/logo.png" height={26} loading="lazy" alt="Logo İPSUM" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCustomersSection