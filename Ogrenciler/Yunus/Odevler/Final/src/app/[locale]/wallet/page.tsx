'use client'
import React, { useEffect, useState } from 'react';
import styles from './CryptoPortfolio.module.scss';
import Title from '@/components/atoms/Title/Title';
import { Col } from 'react-bootstrap';
import Icon from '@/components/atoms/Icons/Icons';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Buttons/Buttons';
import { CoinGeckoService } from '@/services/CoinGeckoService';
import WalletTable from '@/components/molecules/WalletTable/WalletTable';
import { useTranslations } from 'next-intl';

export default function CryptoPortfolio() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [coins, setCoins] = useState([])
    const translate = useTranslations("Wallet")
    const overview = translate.raw("overview")
    useEffect(() => {
        const getCoins = async () => {
            try {
                setIsLoading(true)
                setError(null)
                const data = await CoinGeckoService.getCountCoins(9, true)
                setCoins(data)
            } catch (err) {
                setError('Datada bir hata var coins')
                console.error('Datada bir hata var coins', err)
            } finally {
                setIsLoading(false)
            }
        }
        getCoins()
    }, [])
    return (
        <div className={`${styles.cryptoPortfolio}`}>
            <div className={`${styles.overviewCard} row mb-4 rounded-3`}>
                <Col lg={12}>
                    <Title as="h2" className={styles.overviewTitle}>{overview.title}</Title>
                </Col>
                <Col lg={6} md={12}>
                    <div>
                        <div>
                            <p className={styles.balanceLabel}>{overview.totalBalance}</p>
                        </div>
                        <div className={styles.balanceAmount}>
                            <span className={styles.btcAmount}>0.79253864</span>
                            <span className={`${styles.btcBadge} bg-success px-3 pt-1 fw-bold`}>BTC</span>
                        </div>
                        <p className={styles.usdAmount}>$12,068.83</p>
                    </div>
                </Col>
                <Col lg={6} md={12} className="d-flex flex-column align-items-end justify-content-between">
                    <div className={`${styles.searchContainer} d-flex align-items-center`}>
                        <div className={`${styles.searchBox} w-100`}>
                            <Icon size={19} collection='fa' color='#B1B5C3' name='FaSearch' className={styles.searchIcon} />
                            <Input type="text" placeholder={overview.searchBarText} className={`${styles.searchInput} ${styles.formControlLg} form-control-lg ps-5`} />
                        </div>
                        <div className={`${styles.currencySelector} h-100`}>
                            <select className={`${styles.currencyButton} ${styles.formSelectLg} h-100 form-select-lg`}>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                    </div>
                    <Button variant="primary-button"
                        fontSize="md"
                        className="border-1 px-5 w-100 update-button my-4"
                        height={48}
                    >
                        <span className='px-2'>
                            {overview.buttonText}
                        </span>
                    </Button>
                </Col>
            </div>
            <div>
                <WalletTable />
            </div>
        </div>
    )
}