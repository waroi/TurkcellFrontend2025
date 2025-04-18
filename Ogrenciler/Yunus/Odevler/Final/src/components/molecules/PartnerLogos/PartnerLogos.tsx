'use client'
import './PartnerLogos.scss'

type Props = {
    partners: string[],
    text: string
}

const PartnersLogos = ({ partners, text }: Props) => {
    return (
        <div className="partners">
            <h6 className="fs-5 fw-bold mb-3">{text}</h6>
            <div className="partners-logo d-flex gap-5">
                {partners.map((path) => (
                    <img
                        loading="lazy"
                        src={`/images/homepage/hero/partners${path}`}
                        key={path}
                        alt={`${path} Partners`}
                        className="img-fluid"
                    />
                ))}
            </div>
        </div>
    )
}

export default PartnersLogos