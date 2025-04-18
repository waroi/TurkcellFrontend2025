import Title from "@/components/atoms/Title/Title"
import { Image } from "react-bootstrap"
import './Footer.scss'
import { useTranslations } from "next-intl"

const Footer = () => {
    const t = useTranslations("Footer")
    const logoSection = t.raw("logoSection")
    const directiveLinks = t.raw("SiteDirections")
    return (
        <div className="p-5 w-100 footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="d-flex gap-3 align-items-center mb-4">
                            <Image src="/logo-without-text.png" />
                            <Title as="h6" className="footer-company fw-bold fs-3">
                                Rockie
                            </Title>
                        </div>
                        <ul className="mt-2 footer-company-list">
                            {logoSection.map((item: any) => (
                                <li key={item.id} className={`${item.id == "special" ? "lets-talk" : ""}`}>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {directiveLinks.map((directiveObject: any) => (
                        <div className="col-lg-2 mt-4" key={directiveObject.title}>
                            <Title className="text-uppercase fs-6 footer-list-title" as="h6">
                                {directiveObject.title}
                            </Title>
                            <ul className="footer-list-group">
                                {directiveObject.items.map((item: any) => (
                                    <li key={item.id}><a href="#">{item.label}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer