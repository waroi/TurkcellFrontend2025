import "./style.scss"
import ImageItem from '../../atoms/ImageItem/ImageItem'
import P from '../../atoms/P/P'
import H3 from '../../atoms/H3/H3'
import TradingViewWidget from '../TradingViewWidget/TradingViewWidget'

const MarketCard = ({ dataInfo, logoInfo }: { dataInfo: any, logoInfo: any }) => {
    return (
        <div className="market-card">
            <div className="market-card-top">
                <div className="market-card-title">
                    <ImageItem src={logoInfo.logo} width={44} height={44} alt={logoInfo.name} />
                    <P text={dataInfo.name} />
                </div>
                <TradingViewWidget index={dataInfo.id} symbol={dataInfo.symbol} width={118} height={38} />
            </div>
            <div className="market-card-bottom">
                <H3 text={`USD ${dataInfo.quote.USD.market_cap_dominance}`} /><span>{dataInfo.symbol}</span>
            </div>
        </div>
    )
}

export default MarketCard