"use client"

import { useState } from "react"
import './Exchange.scss'
import Button from "@/components/atoms/Buttons/Buttons"
import { useRouter } from "next/navigation"
import Title from "@/components/atoms/Title/Title"
import Input from "@/components/atoms/Input/Input"
import { useTranslations } from "next-intl"
import { useCurrencyExchange } from "@/hooks/useCurrencyExchange"

type Currency = {
    code: string
    name: string
    icon: any
}

const CurrencyExchange = ({ sell }: { sell?: boolean }) => {
    const {
        payAmount,
        setPayAmount,
        receiveAmount,
        setReceiveAmount,
        payCurrency,
        setPayCurrency,
        receiveCurrency,
        setReceiveCurrency,
        handleSwap,
    } = useCurrencyExchange("3,000,000", "0.00207026", "VND", "BTC")
    const router = useRouter()
    const translateBuy = useTranslations("Wallet").raw("buy")
    const buyStep1 = translateBuy.data.step1
    const translateSell = useTranslations("Wallet").raw("sell")
    const buyStep2 = translateSell.step2
    const currencies: Currency[] = [
        {
            code: "VND",
            name: "Vietnamese Dong",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="currencyIconSvg">
                    <rect width="24" height="24" rx="12" fill="#FFD166" />
                    <path d="M12 6L14.5 11H9.5L12 6Z" fill="#fff" />
                    <path d="M12 18L9.5 13H14.5L12 18Z" fill="#fff" />
                </svg>
            ),
        },
        {
            code: "BTC",
            name: "Bitcoin",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="currencyIconSvg">
                    <rect width="24" height="24" rx="12" fill="#F7931A" />
                    <path d="M15.5 10.5C15.5 8.84 14.16 7.5 12.5 7.5H10V13.5H12.5C14.16 13.5 15.5 12.16 15.5 10.5Z" fill="#fff" />
                    <path d="M14 14H10V16.5H14C14.83 16.5 15.5 15.83 15.5 15C15.5 14.17 14.83 13.5 14 13.5" fill="#fff" />
                </svg>
            ),
        },
        {
            code: "USD",
            name: "US Dollar",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="currencyIconSvg">
                    <rect width="24" height="24" rx="12" fill="#4CAF50" />
                    <path
                        d="M12 6V18M15 9H10.5C9.67 9 9 9.67 9 10.5C9 11.33 9.67 12 10.5 12H13.5C14.33 12 15 12.67 15 13.5C15 14.33 14.33 15 13.5 15H9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            code: "EUR",
            name: "Euro",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="currencyIconSvg">
                    <rect width="24" height="24" rx="12" fill="#2196F3" />
                    <path
                        d="M15 8C14.06 6.8 12.6 6 11 6C8.24 6 6 8.24 6 11C6 13.76 8.24 16 11 16C12.6 16 14.06 15.2 15 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M12 8H18M12 14H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ]
    return (
        <div className={`exchangeCard mt-5`}>
            <Title as="h1" className="title fs-5">
                {sell ? buyStep2.title : buyStep1.title}
            </Title>
            <p className="referencePrice">
                {sell ? "" : `${buyStep1.refPrice}: 1,450,939,280.43 VND/BTC`}
            </p>

            <div className="exchangeForm">
                <div className="exchangeRow">
                    <div className="exchangeColumn">
                        <label htmlFor="pay-amount">
                            {sell ? buyStep2.sell : buyStep1.pay}
                        </label>
                        <div className="inputContainer border-0">
                            <Input type="text" id="pay-amount" value={payAmount} onChange={(e) => setPayAmount(e.target.value)} />
                            <div className="selectWrapper border-0">
                                <select
                                    aria-label="Default select example"
                                    className="form-select currencySelect"
                                    value={payCurrency}
                                    onChange={(e) => setPayCurrency(e.target.value)}
                                >
                                    {currencies.map((currency) => (
                                        <option key={currency.code} value={currency.code}>
                                            {currency.code}
                                        </option>
                                    ))}
                                </select>
                                <div className="selectedCurrency">
                                    {currencies.find((c) => c.code === payCurrency)?.icon}
                                    <span>{payCurrency}</span>
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.5L5 4.5L9 0.5" stroke="#23262F" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="swapButton rounded-circle" onClick={handleSwap}>
                        <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6687 3.02447L15.4466 0.35791C15.3069 0.195998 15.1198 0.106407 14.9256 0.108432C14.7314 0.110457 14.5456 0.203937 14.4083 0.368737C14.271 0.533538 14.1931 0.756473 14.1914 0.989527C14.1897 1.22258 14.2644 1.44711 14.3993 1.61475L15.357 2.76403H2.33141C1.74209 2.76403 1.17691 3.04497 0.760195 3.54505C0.343482 4.04512 0.109375 4.72337 0.109375 5.43059L0.109375 8.09714C0.109375 8.33288 0.187411 8.55896 0.326315 8.72566C0.465219 8.89235 0.653614 8.986 0.850054 8.986C1.04649 8.986 1.23489 8.89235 1.37379 8.72566C1.5127 8.55896 1.59073 8.33288 1.59073 8.09714V5.43059C1.59073 5.19485 1.66877 4.96877 1.80767 4.80207C1.94658 4.63538 2.13497 4.54174 2.33141 4.54174H15.357L14.3993 5.69102C14.3286 5.77302 14.2721 5.8711 14.2333 5.97954C14.1945 6.08798 14.1741 6.20462 14.1732 6.32264C14.1723 6.44066 14.1911 6.5577 14.2283 6.66694C14.2656 6.77618 14.3206 6.87542 14.3901 6.95888C14.4597 7.04233 14.5424 7.10833 14.6334 7.15302C14.7244 7.19772 14.8219 7.22021 14.9203 7.21918C15.0186 7.21816 15.1158 7.19364 15.2062 7.14705C15.2966 7.10047 15.3783 7.03275 15.4466 6.94786L17.6687 4.2813C17.8047 4.11283 17.8807 3.88746 17.8807 3.65288C17.8807 3.41831 17.8047 3.19293 17.6687 3.02447V3.02447Z" fill="white" />
                            <path d="M17.1482 8.98828C16.9517 8.98828 16.7633 9.08193 16.6244 9.24862C16.4855 9.41531 16.4075 9.64139 16.4075 9.87713V12.5437C16.4075 12.7794 16.3295 13.0055 16.1906 13.1722C16.0517 13.3389 15.8633 13.4325 15.6668 13.4325H2.64122L3.59892 12.2832C3.73384 12.1156 3.8085 11.8911 3.80681 11.658C3.80512 11.425 3.72723 11.202 3.5899 11.0372C3.45257 10.8724 3.2668 10.779 3.0726 10.7769C2.87839 10.7749 2.6913 10.8645 2.5516 11.0264L0.329563 13.693C0.193367 13.8613 0.117187 14.0867 0.117188 14.3214C0.117188 14.556 0.193367 14.7814 0.329563 14.9498L2.5516 17.6164C2.61993 17.7012 2.70166 17.769 2.79202 17.8155C2.88239 17.8621 2.97958 17.8866 3.07793 17.8877C3.17627 17.8887 3.27381 17.8662 3.36483 17.8215C3.45586 17.7768 3.53856 17.7108 3.6081 17.6274C3.67765 17.5439 3.73265 17.4447 3.76989 17.3354C3.80713 17.2262 3.82587 17.1092 3.82502 16.9911C3.82416 16.8731 3.80373 16.7565 3.76491 16.648C3.72609 16.5396 3.66967 16.4415 3.59892 16.3595L2.64122 15.2102H15.6668C16.2561 15.2102 16.8213 14.9293 17.238 14.4292C17.6547 13.9291 17.8889 13.2509 17.8889 12.5437V9.87713C17.8889 9.64139 17.8108 9.41531 17.6719 9.24862C17.533 9.08193 17.3446 8.98828 17.1482 8.98828Z" fill="white" />
                        </svg>

                    </button>

                    <div className="exchangeColumn">
                        <label htmlFor="receive-amount">
                            {sell ? buyStep2.get : buyStep1.receive}
                        </label>
                        <div className="inputContainer border-0">
                            <input
                                type="text"
                                id="receive-amount"
                                value={receiveAmount}
                                onChange={(event) => setReceiveAmount(event.target.value)}
                            />
                            <div className="selectWrapper border-0">
                                <select
                                    className="currencySelect"
                                    value={receiveCurrency}
                                    onChange={(event) => setReceiveCurrency(event.target.value)}
                                >
                                    {currencies.map((currency) => (
                                        <option key={currency.code} value={currency.code}>
                                            {currency.code}
                                        </option>
                                    ))}
                                </select>
                                <div className="selectedCurrency">
                                    {currencies.find((c) => c.code === receiveCurrency)?.icon}
                                    <span>{receiveCurrency}</span>
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.5L5 4.5L9 0.5" stroke="#23262F" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-end mt-3">
                    <Button variant="primary-button"
                        fontSize="md"
                        className="border-1 px-4 w-25 hero-button"
                        height={48}
                        onClick={() => { sell ? router.push('/wallet/sell/step3') : router.push('/wallet/buy/step2') }}>
                        <span className='px-2'>
                            {buyStep1.buttonText}
                        </span>
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default CurrencyExchange