import ButtonItem from "../../atoms/ButtonItem/ButtonItem"
import H3 from "../../atoms/H3/H3"
import ImageItem from "../../atoms/ImageItem/ImageItem"
import P from "../../atoms/P/P"

const CoinCard = ({ dataInfo, logoInfo }: { dataInfo: any, logoInfo: any }) => {
    return (
        <div className="coin-card">
            <div className="coin-card-title">
                <ImageItem src={logoInfo.logo} width={24} height={24} alt={logoInfo.name} />
                <P text={dataInfo.name} child={<span>{dataInfo.symbol}/USD</span>} />
            </div>
            <H3 text={`USD ${dataInfo.quote.USD.market_cap_dominance}`} />
            <div className="coin-card-footer">
                <P text={dataInfo.quote.USD.market_cap_dominance} />
                <ButtonItem text={dataInfo.quote.USD.percent_change_24h} classProps={dataInfo.quote.USD.percent_change_24h >= 0 ? "green" : "red"} />
            </div>
        </div>
    )
}

export default CoinCard