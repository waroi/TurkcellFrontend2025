'use client'

import Title from '@/components/atoms/Title/Title'
import './SellTable.scss'
import Paragraph from '@/components/atoms/Paragraph/Paragraph'
import { Image } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { PortfolioCoin } from '@/types/PortfolioCoin'
import { CoinGeckoService } from '@/services/CoinGeckoService'
import { formatCurrency } from '@/utils/formatter'
import { useTranslations } from 'next-intl'

const SellTable = () => {
    const [coins, setCoins] = useState<PortfolioCoin[]>([])
    const [selectedCoinIds, setSelectedCoinIds] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const translate = useTranslations("Wallet").raw("sell").step1

    useEffect(() => {
        const getAccWallet = async () => {
            try {
                setIsLoading(true)
                const wallet = await CoinGeckoService.getWallet(10)
                setCoins(wallet)
                console.log('Veri:', wallet)
            } catch (err) {
                console.error('Veri çekme hatası:', err)
                setError('Veri yüklenemedi, lütfen tekrar deneyin.')
            } finally {
                setIsLoading(false)
            }
        }
        getAccWallet()
    }, [])

    const handleRowClick = (coinId: string) => {
        setSelectedCoinIds(prev =>
            prev.includes(coinId)
                ? prev.filter(id => id !== coinId)
                : [...prev, coinId]
        )
    }

    return (
        <div className='selltable'>
            <Title className='title'>{translate.table.title}</Title>

            {isLoading ? (
                <Paragraph>{translate.table.loading}</Paragraph>
            ) : error ? (
                <Paragraph className='text-danger'>{error}</Paragraph>
            ) : coins.length === 0 ? (
                <Paragraph>{translate.table.noData}</Paragraph>
            ) : (
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>{translate.table.name}</th>
                                <th scope='col'>{translate.table.price}</th>
                                <th scope='col'>24%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin: PortfolioCoin) => (
                                <tr
                                    key={coin.id}
                                    className={selectedCoinIds.includes(coin.id.toString()) ? 'selected-row' : ''}
                                    onClick={() => handleRowClick(coin.id.toString())}
                                >
                                    <td>
                                        <span className='me-2'>{coin.id}</span>
                                        <Image width={40} height={40} src={coin.icon} loading='lazy' />
                                    </td>
                                    <td>
                                        <div className='d-flex justify-content-center flex-column'>
                                            <strong className='my-0'>{coin.name}</strong>
                                            <Paragraph className='my-0 table-asset'>
                                                {coin.fullName}
                                            </Paragraph>
                                        </div>
                                    </td>
                                    <td className='last-col'>
                                        <strong>${formatCurrency(Number(coin.current_price))}</strong>
                                    </td>
                                    <td>
                                        <span
                                            className={`fw-bold ${Number(coin.apr) > 0 ? 'text-success' : 'text-danger'
                                                }`}
                                        >
                                            {coin.apr}%
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default SellTable