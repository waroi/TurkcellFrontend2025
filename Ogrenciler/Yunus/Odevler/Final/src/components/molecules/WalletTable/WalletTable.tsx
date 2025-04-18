'use client'
import { Image } from 'react-bootstrap'
import './WalletTable.scss'
import Paragraph from '@/components/atoms/Paragraph/Paragraph'
import { useEffect, useState } from 'react'
import { CoinGeckoService } from '@/services/CoinGeckoService'
import { PortfolioCoin } from '@/types/PortfolioCoin'
import { useTranslations } from 'next-intl'

const WalletTable = () => {
    const translate = useTranslations("Wallet")
    const overview = translate.raw("overview")
    const forms = overview.forms
    const [coins, setCoins] = useState<PortfolioCoin[]>([])
    useEffect(() => {
        const getAccWallet = async () => {
            const wallet = await CoinGeckoService.getWallet(10)
            setCoins(wallet)
        }
        getAccWallet()
    }, [])

    return (
        <div className="table-responsive">
            <table className={`table`}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className='text-start'>{forms[1]}</th>
                        <th className='text-end'>{forms[2]}</th>
                        <th className='text-end'>{forms[3]}</th>
                        <th className='text-end'>{forms[4]}</th>
                        <th>{forms[5]}</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin: PortfolioCoin) => (
                        <tr key={coin.id}>
                            <td className='text-end'>
                                <span className='me-2'>{coin.id}</span>
                                <Image width={40} height={40} src={coin.icon} loading='lazy' />
                            </td>
                            <td>
                                <div className="d-flex justify-content-center flex-column">
                                    <strong className='my-0'>{coin.name}</strong>
                                    <Paragraph className='my-0 table-asset'>
                                        {coin.fullName}
                                    </Paragraph>
                                </div>
                            </td>
                            <td className='text-end'>
                                <span className={`fw-bold ${Number(coin.apr) > 0 ? 'text-success' : 'text-danger'}`}>{coin.apr} APR</span>
                            </td>
                            <td className='text-end'>
                                <strong>{coin.onOrdersBTC} BTC</strong>
                                <Paragraph className='my-0 table-asset'>
                                    ${coin.onOrdersUSD}
                                </Paragraph>
                            </td>
                            <td className='text-end'>
                                <strong>
                                    {coin.availableBalanceBTC} BTC
                                </strong>
                                <Paragraph className='my-0 table-asset'>
                                    ${coin.availableBalanceUSD}
                                </Paragraph>
                            </td>
                            <td className='last-col text-end'>
                                <strong>
                                    {coin.totalBalanceBTC} BTC
                                </strong>
                                <Paragraph className='my-0 table-asset text-end'>
                                    ${coin.totalBalanceUSD}
                                </Paragraph>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default WalletTable