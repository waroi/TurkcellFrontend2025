'use client'

import Title from '@/components/atoms/Title/Title'
import CategoryTabs from '@/components/molecules/CategoryTabs/CategoryTabs'
import SearchBar from '@/components/molecules/SearchBar/SearchBar'
import MarketTable from '../MarketTable/MarketTable'
import './../../templates/MarketSection/MarketSection.scss'
import { useMarketSection } from '@/hooks/useMarketSection'

const MarketSection: React.FC = () => {
    const {
        marketCap,
        filteredCoins,
        favorites,
        searchTerm,
        isLoading,
        error,
        handleSearch,
        handleToggleFavorite
    } = useMarketSection()

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="text-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">
                            {marketCap.messages.loading}
                        </span>
                    </div>
                    <p className="mt-2">{marketCap.messages.dataLoading}</p>
                </div>
            )
        }

        if (error) {
            return (
                <div className="alert alert-danger my-5" role="alert">
                    {error}
                </div>
            )
        }

        return (
            <MarketTable
                tableColumns={marketCap.tableColumns}
                coins={filteredCoins}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
                className="mt-5"
            />
        )
    }

    return (
        <div className="w-100">
            <div className="marketcap-main container p-lg-5 mt-5">
                <div className="market-section-header d-flex justify-content-between align-items-center mb-4">
                    <Title className="hero-title fs-2 fw-bold ps-2" as="h1">{marketCap.title}</Title>
                    <a href="/all-coins" className="fw-bold">{marketCap.subTitle}</a>
                </div>

                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex align-items-center flex-wrap overflow-hidden">
                        <CategoryTabs categories={marketCap.categories} />
                    </div>
                    <SearchBar value={searchTerm} onChange={handleSearch} />
                </div>

                {renderContent()}
            </div>
        </div>
    )
}

export default MarketSection