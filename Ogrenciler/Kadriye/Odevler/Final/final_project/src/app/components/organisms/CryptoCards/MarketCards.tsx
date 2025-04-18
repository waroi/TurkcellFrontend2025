import "./style.scss"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem"
import MarketCard from "../../molecules/Card/MarketCard"

const MarketCards = ({ dataInfos, logoInfos }: { dataInfos: any, logoInfos: any }) => {
    return (
        <div className="container">
            <div className="card-container">
                <div className="top">
                    <ButtonItem text="Crypto" classProps="active" />
                    <ButtonItem text="DeFi" />
                    <ButtonItem text="BSC" />
                    <ButtonItem text="NFT" />
                    <ButtonItem text="Metaverse" />
                    <ButtonItem text="Polkadot" />
                    <ButtonItem text="Solana" />
                    <ButtonItem text="Opensea" />
                    <ButtonItem text="Makersplace" />
                </div>
                <div className="cards">
                    {dataInfos.map((element: any, index: number) => {
                        if (index < 4) {
                            return <MarketCard key={element.id} dataInfo={element} logoInfo={logoInfos[element.id]} />
                        }
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default MarketCards