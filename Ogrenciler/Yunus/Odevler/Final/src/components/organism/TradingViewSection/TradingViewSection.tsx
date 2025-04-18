import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TradingView from '../TradingView/TradingView'
import './TradingViewSection.scss'
import Title from '@/components/atoms/Title/Title'
import DashboardExchange from '@/components/molecules/DashboardExchange/DashboardExchange'
import DashboardBalance from '@/components/molecules/DashboardBalance/DashboardBalance'
import HistoryOrders from '@/components/molecules/HistoryOrders/HistoryOrders'
import OrderBook from '../OrderBook/OrderBook'
import RecentTrades from '../RecentTrades/RecentTrades'
import AllOrders from '../AllOrders/AllOrders'
import { useTranslations } from 'next-intl'

const TradingViewSection = () => {
    const translate = useTranslations("Dashboard")
    return (
        <div className='main-trading container-fluid'>
            <Row className='trading-view-section mt-0 gap-3'>
                <Col xl={8} className='row-8-trading order-xl-1 order-2'>
                    <div className="trading-title my-0 me-0 pb-3 w-100">
                        <Title>{translate.raw("title")}</Title>
                    </div>
                    <div className="trading-view w-100">
                        <TradingView />
                    </div>
                    <HistoryOrders />
                    <Row>
                        <Col lg={6}>
                            <OrderBook />
                        </Col>
                        <Col lg={6}>
                            <RecentTrades />
                        </Col>
                    </Row>
                </Col>
                <Col xl={4} className="order-xl-2 order-1">
                    <DashboardExchange />
                    <DashboardBalance />
                    <AllOrders />
                </Col>
            </Row>
        </div>
    )
}

export default TradingViewSection