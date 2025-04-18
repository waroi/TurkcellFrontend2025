import './MarketSubHero.scss'
import Button from '@/components/atoms/Buttons/Buttons'
import SubHeroCard from '@/components/molecules/SubHeroCard/SubHeroCard'
import { SubHeroType } from '@/types/CoinsType'
import MarketSubHeroCard from '../MarketSubHeroCard/MarketSubHeroCard'

const MarketSubHero = ({ coins }: { coins: SubHeroType[] }) => {
    const subHeroTitles = ["DeFi", "BSC", "NFT", "Metaverse", "Polkadot", "Solana", "Opensea", "Makersplace"]
    return (
        <div className="subHero shadow-sm w-100">
            <div className='d-flex align-items-center'>
                <Button
                    variant="primary-button"
                    fontSize="sm"
                    height={32}
                    onClick={() => null}
                >
                    Crypto
                </Button>
                <ul className='subHero-list d-flex px-3 align-items-center'>
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
                        <MarketSubHeroCard key={coin.name} coin={coin} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MarketSubHero