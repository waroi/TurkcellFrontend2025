'use client'

import React, { useEffect, useState } from 'react';
import styles from './SelectCrypto.module.scss';
import { Col } from 'react-bootstrap';
import Icon from '@/components/atoms/Icons/Icon';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Buttons/Buttons';
import { CoinGeckoService } from '@/services/CoinGeckoService';
import SellTable from '../SellTable/SellTable';
import Paragraph from '@/components/atoms/Paragraph/Paragraph';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function SelectCrypto() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [coins, setCoins] = useState([])
    const router = useRouter()
    const translate = useTranslations("Wallet").raw("sell").step1
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
        <div className={`${styles.cryptoPortfolio} mt-5`}>
            <div className={`${styles.overviewCard} row mb-4 rounded-3`}>
                <Col lg={6} md={12}>
                    <div>
                        <div className={styles.balanceAmount}>
                            <span className={styles.btcAmount}>{translate.title}</span>
                        </div>
                        <Paragraph className={`${styles.usdAmount} mb-0`}>
                            {translate.text} <br /> {translate.search}
                        </Paragraph>
                    </div>
                </Col>
                <Col lg={6} md={12} className="d-flex flex-column align-items-end justify-content-between">
                    <div className={`${styles.searchContainer} d-flex align-items-center`}>
                        <div className={`${styles.searchBox} w-100`}>
                            <Icon size={19} collection='fa' color='#B1B5C3' name='FaSearch' className={styles.searchIcon} />
                            <Input type="text" placeholder="Search" className={`${styles.searchInput} ${styles.formControlLg} form-control-lg ps-5`} />
                        </div>
                        <div className={`${styles.currencySelector} h-100`}>
                            <select className={`${styles.currencyButton} ${styles.formSelectLg} h-100 form-select-lg`}>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                    </div>
                    <Button variant="primary-button"
                        fontSize="md"
                        className="border-1 px-5 update-button my-4"
                        height={48}
                    >
                        <span className='px-2'>
                            {translate.searchBarText}
                        </span>
                    </Button>
                </Col>
            </div>
            <div>
                <SellTable />
            </div>
            <div className="d-flex justify-content-end mt-5">
                <Button variant="primary-button"
                    fontSize="md"
                    className="border-1 px-4 w-25 hero-button"
                    height={48}
                    onClick={() => router.push('/wallet/sell/step2')}>
                    <span className='px-2'>
                        {translate.goButtonText}
                    </span>
                </Button>
            </div>
        </div>
    )
}