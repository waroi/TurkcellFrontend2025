'use client'

import Button from '@/components/atoms/Buttons/Buttons'
import './DashboadExchange.scss'
import { Image } from 'react-bootstrap'
import { useState } from 'react'
import Icon from '@/components/atoms/Icons/Icons'
import { useTheme } from '@/contexts/ThemeContext'
import Paragraph from '@/components/atoms/Paragraph/Paragraph'
import { useTranslations } from 'next-intl'


const DashboardExchange = () => {
    const { theme } = useTheme()
    const translate = useTranslations("Dashboard").raw("Exchange")

    const [selectedCrypto, setSelectedCrypto] = useState<any>({
        code: 'BTC',
        image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'
    });
    const [receiveSelectedCrypto, setReceiveSelectedCrypto] = useState<any>({
        code: 'ETH',
        image: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628'
    })

    const cryptocurrencies = [
        { code: 'BTC', image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400' },
        { code: 'ETH', image: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628' },
        { code: 'USDT', image: 'https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661' }
    ]

    const handleCryptoChange = (event: any) => {
        const code = event.target.value
        const crypto = cryptocurrencies.find(c => c.code === code)
        setSelectedCrypto(crypto)
    }

    const handleCryptoChangeReceive = (event: any) => {
        const code = event.target.value
        const crypto = cryptocurrencies.find(c => c.code === code)
        setReceiveSelectedCrypto(crypto)
    }

    return (
        <div className='dashboard-exchange w-100'>
            <div className="tabs">
                <div className='tab-box active'>
                    <button>
                        {translate.title.buy}
                    </button>
                </div>
                <div className='tab-box'>
                    <button>{translate.title.sell}</button>

                </div>
            </div>

            <div className="categories px-lg-5 d-flex align-items-center justify-content-center">
                <Button
                    variant="primary-button"
                    fontSize="sm"
                    height={32}
                    onClick={() => null}
                >
                    {translate.tabs.limit}
                </Button>
                <Button
                    variant="tab-button"
                    fontSize="sm" className='mt-0'
                    height={32}
                    onClick={() => null}
                >
                    {translate.tabs.market}
                </Button>
                <Button
                    variant="tab-button"
                    fontSize="sm" className='mt-0'
                    height={32}
                    onClick={() => null}
                >
                    {translate.tabs.stopLimit}
                </Button>
                <Button
                    variant="tab-button"
                    fontSize="sm" className='mt-0'
                    height={32}
                    onClick={() => null}
                >
                    {translate.tabs.stopMarket}
                </Button>
            </div>

            <div className="exchange-values receive-box px-xl-5">
                <div className="form-floating crypto-input-container">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder={"3,000"}
                        defaultValue={"1881,1938"}
                    />
                    <label htmlFor="floatingInput">{translate.forms.pay}</label>

                    <div className="crypto-selector me-4 mt-2">
                        <div className="crypto-display border-0 bg-transparent">
                            <Image
                                src={selectedCrypto.image}
                                width={24}
                                height={24}
                                alt={`Selected Crypto ${selectedCrypto.code}`}
                            />
                            <span className='selectedCrypto'>{selectedCrypto.code}</span>
                            <Icon className='arrow' collection='io' name='IoIosArrowDown' size={8} color={theme === "dark" ? "#FFFFFF" : "#23262F"} />
                        </div>

                        <select
                            className="crypto-select"
                            value={selectedCrypto.code}
                            onChange={handleCryptoChange}
                        >
                            {cryptocurrencies.map(crypto => (
                                <option key={crypto.code} value={crypto.code}>
                                    {crypto.code}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-floating crypto-input-container">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        defaultValue={"∞∞∞"}
                        placeholder={"3,000"}
                    />
                    <label htmlFor="floatingInput">{translate.forms.receive}</label>

                    <div className="crypto-selector me-4 mt-2">
                        <div className="crypto-display border-0 bg-transparent">
                            <Image
                                src={receiveSelectedCrypto.image}
                                alt={receiveSelectedCrypto.code}
                                width={24}
                                height={24}
                            />
                            <span className='selectedCrypto'>{receiveSelectedCrypto.code}</span>
                            <Icon className='arrow' collection='io' name='IoIosArrowDown' size={8} color={theme === "dark" ? "#FFFFFF" : "#23262F"} />
                        </div>

                        <select
                            className="crypto-select"
                            value={receiveSelectedCrypto.code}
                            onChange={handleCryptoChangeReceive}
                        >
                            {cryptocurrencies.map(crypto => (
                                <option key={crypto.code} value={crypto.code}>
                                    {crypto.code}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="change-coins d-flex gap-3 justify-content-center">
                <Paragraph className='mb-0 mt-1'>
                    1 BTC ≈ 38,677.94 USD
                </Paragraph>
                <Button
                    variant="tab-button"
                    fontSize="sm" className='mt-0 change-coins-button'
                    height={32}
                    onClick={() => null}
                >
                    <svg className="marketSvg" width="16" height="16" viewBox="0 0 24 24"
                        fill={theme == "dark" ? "#B1B5C3" : "#777E90"} xmlns="http://www.w3.org/2000/svg">
                        <path fill={theme == "dark" ? "#B1B5C3" : "#777E90"} d="M16.2071 2.7929C15.8166 2.40237 15.1834 2.40237 14.7929 2.79289C14.4024 3.18341 14.4024 3.81658 14.7929 4.2071L15.5819 4.99615H10C6.13401 4.99615 3 8.13016 3 11.9962V12.9962C3 13.5484 3.44772 13.9962 4 13.9962C4.55228 13.9962 5 13.5484 5 12.9962V11.9962C5 9.23473 7.23858 6.99615 10 6.99615H15.5866L14.7929 7.78992C14.4024 8.18045 14.4024 8.81362 14.7929 9.20414C15.1834 9.59466 15.8166 9.59465 16.2071 9.20412L18.352 7.05916C18.9378 6.47337 18.9378 5.52363 18.352 4.93785L16.2071 2.7929Z"></path><path d="M13.9984 19C17.8644 19 20.9984 15.866 20.9984 12V11C20.9984 10.4477 20.5507 10 19.9984 10C19.4461 10 18.9984 10.4477 18.9984 11V12C18.9984 14.7614 16.7598 17 13.9984 17H8.4117L9.20552 16.2062C9.59604 15.8156 9.59603 15.1825 9.2055 14.792C8.81498 14.4014 8.18181 14.4014 7.79129 14.792L5.64636 16.9369C5.06059 17.5227 5.06059 18.4725 5.64636 19.0582L7.79129 21.2032C8.18181 21.5937 8.81498 21.5937 9.20551 21.2032C9.59603 20.8127 9.59604 20.1795 9.20551 19.789L8.41653 19H13.9984Z" fill={theme == "dark" ? "#B1B5C3" : "#777E90"}>
                        </path>
                    </svg>
                </Button>
            </div>
            <div className="px-lg-5 pb-5">
                <Button variant="primary-button"
                    fontSize="md"
                    className="border-1 px-4 hero-button w-100"
                    height={48}
                    onClick={() => null}>
                    <span className='px-2'>
                        {translate.forms.buttonText}
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default DashboardExchange