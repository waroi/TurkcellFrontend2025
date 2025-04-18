'use client'
import MarketBanner from '../../../components/molecules/MarketBanner'

import MarketProduct from '../../../components/molecules/MarketProduct'
import PageContainer from '../../../components/PageContainer'
import React from 'react'
import HomeMarketCard from '../../../components/molecules/HomeMarketCard'
import EarnUp from '@/components/molecules/EarnUp'
import Navbar from '../../../components/Navbar';

const Market = () => {
  return (
    <div>
      <Navbar />
      <PageContainer bgColor="bg-primary bg-opacity-10">
        <MarketBanner />
      </PageContainer>
      <PageContainer bgColor="bg-white">
        <HomeMarketCard />
      </PageContainer>
      <PageContainer bgColor="bg-light">
        <MarketProduct />
      </PageContainer>
      <PageContainer bgColor="bg-foto">
        <EarnUp />
      </PageContainer>

    </div>
  )
}

export default Market;