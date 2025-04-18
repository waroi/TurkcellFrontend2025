import './SubHero.scss'
import Button from '@/components/atoms/Buttons/Buttons'
import SubHeroCard from '@/components/molecules/SubHeroCard/SubHeroCard'
import { SubHeroType } from '@/types/CoinsType'

const SubHero = () => {
    const subHeroTitles = ["DeFi", "BSC", "NFT", "Metaverse", "Polkadot", "Solana", "Opensea", "Makersplace"]

    const coins: SubHeroType[] = [
        {
            id: "bitcoin",
            image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            symbol: "btc",
            current_price: "46,168,95",
            price_change_percentage_24h: "0.58559",
            name: "Bitcoin",
            short: "BTC/USD",
            mon: "USD"
        },
        {
            id: "ethereum",
            image: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
            symbol: "eth",
            current_price: "3,480.04",
            price_change_percentage_24h: "4.72206",
            name: "Ethereum",
            short: "ETH/USD",
            mon: "USD"
        },
        {
            id: "tether",
            image: "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
            symbol: "usdt",
            current_price: "1.00",
            price_change_percentage_24h: "0.00341",
            name: "Tether",
            short: "USDT/USD",
            mon: "USD"
        },
        {
            id: "ripple",
            image: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
            symbol: "xrp",
            current_price: "443.56",
            price_change_percentage_24h: "1.789",
            name: "Ripple",
            short: "XRP/USD",
            mon: "USD"
        }
    ]

    return (
        <div className="subHero shadow-sm w-100">
            <div className='d-flex align-items-center'>
                <Button
                    variant="primary-button"
                    fontSize="sm"
                    className='mb-1'
                    height={32}
                    onClick={() => null}
                >
                    Crypto
                </Button>

                <ul className='subHero-list pb-3 d-flex px-3 align-items-center'>
                    {subHeroTitles.map((title: string) => (
                        <li key={title} className='subHero-item'>
                            <a href='#' className='subHero-link fw-bold px-4' key={title}>
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="subHero-line mt-2"></div>


            <div className="subhero-coins-list">
                <div className="row mt-4">
                    {coins.map((coin: SubHeroType) => (
                        <SubHeroCard key={coin.name} coin={coin} />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default SubHero