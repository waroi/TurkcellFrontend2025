import WalletLayoutOrganism from '@/components/organism/WalletLayout/WalletLayoutOrganism'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const WalletPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container className="main-wallet-layout">
            <Row>
                <Col xl={3} md={12} className="wallet-layout-nav order-xl-1 order-2 mt-xl-0 mt-4">
                    <WalletLayoutOrganism />
                </Col>
                <Col xl={9} className="ps-lg-5 order-xl-2 order-1" md={12}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default WalletPage