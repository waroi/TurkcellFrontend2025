'use client'

import Button from '@/components/atoms/Buttons/Buttons'
import './DashboardBalance.scss'
import { Image } from 'react-bootstrap'
import Icon from '@/components/atoms/Icons/Icons'
import { useTheme } from '@/contexts/ThemeContext'
import Paragraph from '@/components/atoms/Paragraph/Paragraph'
import Title from '@/components/atoms/Title/Title'
import { useTranslations } from 'next-intl'


const DashboardBalance = () => {
    const { theme } = useTheme()
    const translate = useTranslations("Dashboard").raw("Balance")
    const balance = [
        {
            id: "134123131",
            image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            name: "Bitcoin",
            amount: "42,85",
            price: "5,642.53",
            short: "BTC",
            apr: "1.45"
        },
        {
            id: "5322222222226236325",
            image: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
            name: "Ethereum",
            amount: "42,85",
            price: "5,642.53",
            apr: "-1.45",
            short: "ETH"
        },
        {
            id: "987654321",
            image: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
            name: "Cardano",
            amount: "42,85",
            price: "0.45",
            short: "ADA",
            apr: "2.10"
        },
        {
            id: "123456789",
            image: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756",
            name: "Solana",
            amount: "42,85",
            price: "140.25",
            short: "SOL",
            apr: "3.75"
        },
        {
            id: "456789123",
            image: "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409",
            name: "Dogecoin",
            amount: "42,85",
            price: "0.15",
            short: "DOGE",
            apr: "-0.85"
        },
        {
            id: "789123456",
            image: "https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442",
            name: "XRP",
            amount: "42,85",
            price: "0.60",
            short: "XRP",
            apr: "1.20"
        },
        {
            id: "789124213456",
            image: "https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442",
            name: "XRP",
            amount: "42,85",
            price: "0.60",
            short: "XRP",
            apr: "1.20"
        },
        {
            id: "789124213432556",
            image: "https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442",
            name: "XRP",
            amount: "42,85",
            price: "0.60",
            short: "XRP",
            apr: "1.20"
        }
    ]
    return (
        <div className='dashboard-exchange balance mt-4 w-100'>
            <div className="tabs flex-column">
                <Paragraph className='description'>
                    {translate.title}
                </Paragraph>

                <Title as={"h5"} className='title'>
                    $132,832.89
                </Title>

                <div className="balance w-100">
                    <Button variant="cancel-button"
                        fontSize="md"
                        className="border-1 px-4 w-100 hero-button cancel-button"
                        height={48}
                        onClick={() => history.back()}>
                        <span className='px-2'>
                            <Icon name='GoPlus' size={20} collection='go' />    {translate.buttonText}
                        </span>
                    </Button>
                </div>

                <div className="crypto-list w-100 px-lg-5">
                    <div className="d-flex px-5 justify-content-between align-items-center">
                        <Title className='title mb-0' as='h6'>
                            {translate.subTitle}
                        </Title>
                        <Icon collection='ci' color={theme !== "dark" ? "#777E90" : "#B1B5C3"} name='CiSearch' size={26} />
                    </div>

                    <div className='crypto-list-wrapper px-5 w-100 pb-5'>
                        <div className='crypto-list-group'>

                            {balance.map(balance => (
                                <div key={balance.id} className='d-flex crypto-list-item justify-content-between align-items-center'>
                                    <div className='d-flex gap-3 justify-content-between align-items-center'>
                                        <Image src={balance.image} loading='lazy' alt='cryypto image' width={48} height={48} />
                                        <div>
                                            <Paragraph className='mb-0'>
                                                <strong>{balance.name}</strong>
                                            </Paragraph>
                                            <Paragraph className='mb-0 amount'>
                                                {balance.amount} {balance.short}
                                            </Paragraph>
                                        </div>
                                    </div>
                                    <div className='text-end'>
                                        <Paragraph className='mb-0 price'>
                                            ${balance.price}
                                        </Paragraph>
                                        <span className={`${Number(balance.apr) > 0 ? "text-success" : "text-danger"} apr`}>
                                            {balance.apr}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardBalance