import BreadCrumb from "@/components/molecules/BreadCrumb/BreadCrumb"
import UserLayout from "@/components/organism/UserLayout/UserLayout"
import { Col, Container, Row } from "react-bootstrap"
import './User.scss'
import { useTranslations } from "next-intl"
import { Metadata } from "next"
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute"

export const metadata: Metadata = {
    title: "User - Rocket Crypto",
    description: "Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.",
}

const layout = ({ children }: { children: React.ReactNode }) => {
    const user = useTranslations("User")
    return (
        <ProtectedRoute>
            <div className="pb-5">
                <div className="page-top">
                    <BreadCrumb title={user.raw("title")} path={user.raw("path")} />
                </div>
                <Container className="main-user-layout">
                    <Row>
                        <Col xl={3} className="user-layout-nav order-xl-1 order-2">
                            <UserLayout />
                        </Col>
                        <Col xl={9} className="ps-lg-5 order-xl-2 order-1">
                            {children}
                        </Col>
                    </Row>
                </Container>
            </div>
        </ProtectedRoute>
    )
}

export default layout