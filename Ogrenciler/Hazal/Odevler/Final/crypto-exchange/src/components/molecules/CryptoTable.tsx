'use client'

import React, { useState } from 'react'
import styles from './styles.module.scss'
import { CryptoCurrency } from '@/types/crypto.d'
import { useDispatch } from 'react-redux'
import { selectCoin, addToWatchlist, removeFromWatchlist } from '@/store/slices/cryptoSlice'
import { useRouter } from 'next/navigation'
import { FiStar } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

interface CryptoTableProps {
  coins: CryptoCurrency[]
}

const CryptoTable: React.FC<CryptoTableProps> = ({ coins }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { watchlist } = useSelector((state: RootState) => state.crypto)
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null)

  const handleRowClick = (coin: CryptoCurrency) => {
    dispatch(selectCoin(coin))
    router.push(`/trade/${coin.id}`)
  }

  const handleWatchlistToggle = (e: React.MouseEvent, coinId: string) => {
    e.stopPropagation()
    if (watchlist.includes(coinId)) {
      dispatch(removeFromWatchlist(coinId))
    } else {
      dispatch(addToWatchlist(coinId))
    }
  }

  const sortedCoins = React.useMemo(() => {
    if (!coins || !sortConfig || !sortConfig.key) return coins;
  
    let sortableCoins = [...coins];
    sortableCoins.sort((a, b) => {
      const aValue = a[sortConfig.key as keyof CryptoCurrency];
      const bValue = b[sortConfig.key as keyof CryptoCurrency];
  
      if (aValue == null || bValue == null) return 0;
      if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  
    return sortableCoins;
  }, [coins, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>{t('name')}</th>
            <th onClick={() => requestSort('current_price')}>{t('price')}</th>
            <th onClick={() => requestSort('price_change_percentage_24h')}>{t('24hChange')}</th>
            <th onClick={() => requestSort('market_cap')}>{t('marketCap')}</th>
            <th onClick={() => requestSort('total_volume')}>{t('volume')}</th>
            <th>{t('watchlist')}</th>
          </tr>
        </thead>
        <tbody>
          {sortedCoins.map((coin) => (
            <tr key={coin.id} onClick={() => handleRowClick(coin)}>
              <td>
                <div className={styles.coinInfo}>
                  <img src={coin.image} alt={coin.name} width={24} height={24} />
                  <span>{coin.name}</span>
                  <span className={styles.symbol}>{coin.symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td className={coin.price_change_percentage_24h >= 0 ? styles.positive : styles.negative}>
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td>${coin.market_cap.toLocaleString()}</td>
              <td>${coin.total_volume.toLocaleString()}</td>
              <td>
                <button
                  onClick={(e) => handleWatchlistToggle(e, coin.id)}
                  className={`${styles.watchlistButton} ${watchlist.includes(coin.id) ? styles.active : ''}`}
                >
                  <FiStar />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
