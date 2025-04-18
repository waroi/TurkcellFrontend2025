import { Container, Row, Col } from "react-bootstrap";
import TradingChart from "../../_components/ui/Charts/TradingChart";
import BuySellPanel from "./_components/BuySellPanel";
import { getOrderHistory, getTestnetBalance } from "../../utils/actions";
import BalancePanel from "./_components/BalancePanel";
import OrderTable from "./_components/OrderTable";
import OrderNavs from "./_components/OrderNavs";
import OrderBook from "./_components/OrderBook";
import RecentTrades from "./_components/RecentTrades";
import CoinList from "./_components/CoinList";
import { Suspense } from "react";

const TradePage = async () => {
  const balances = await getTestnetBalance();
  const orderHistory = await getOrderHistory("BTCUSDT");

  return (
    <Container fluid className="dashboard py-4 bg-surface">
      <Row className="mb-4">
        <Col>
          <div className="p-3 rounded bg-body shadow-sm">Pair Info Header</div>
        </Col>
      </Row>

      <Row className="mb-4 gx-4">
        <Col xs={12} md={8} className="d-flex flex-column gap-4">
          <div className="p-4 rounded bg-body shadow-sm">
          <Suspense fallback={<div>Loading Market Table...</div>} > <TradingChart /></Suspense>
           
          </div>
          <div className="p-4 rounded bg-body shadow-sm">
            <OrderNavs />
            <Suspense fallback={<div>Loading Market Table...</div>} ><OrderTable orderHistory={orderHistory} /></Suspense>
    
          </div>
          <Row className="gx-4">
            <Col>
              <div className="p-4 rounded bg-body shadow-sm">
                <OrderBook />
              </div>
            </Col>
            <Col>
              <div className="p-4 rounded bg-body shadow-sm">
                <RecentTrades />
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={4} className="d-flex flex-column gap-4">
          <div className="p-4 rounded bg-body shadow-sm">
            <BuySellPanel />
          </div>
          <div className="p-4 rounded bg-body shadow-sm">
          <Suspense fallback={<div>Loading Market Table...</div>} ><BalancePanel balances={balances} /></Suspense>
            
          </div>

          <div className="p-4 rounded bg-body shadow-sm">
            <CoinList />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TradePage;
