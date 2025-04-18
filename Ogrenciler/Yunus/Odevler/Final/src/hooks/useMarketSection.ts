import { useState, useEffect, ChangeEvent } from 'react'
import { CoinGeckoService } from '@/services/CoinGeckoService'
import { SubHeroType } from '@/types/CoinsType'
import { useTranslations } from 'next-intl'

export const useMarketSection = () => {
    const [coins, setCoins] = useState<SubHeroType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [favorites, setFavorites] = useState<string[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    const t = useTranslations("HomePage")
    const marketCap = t.raw("MarketCap")

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

    const handleToggleFavorite = (coinId: string) => {
        setFavorites(prev => (
            prev.includes(coinId)
                ? prev.filter(id => id !== coinId)
                : [...prev, coinId]
        ))
    }

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const filteredCoins = coins.filter((coin: SubHeroType) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.short.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return {
        marketCap,
        filteredCoins,
        favorites,
        searchTerm,
        isLoading,
        error,
        handleSearch,
        handleToggleFavorite
    }
}