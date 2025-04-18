import React from 'react'
import HomeFirst from '../molecules/HomeFirst'
import HomeMarketCard from '../molecules/HomeMarketCard'
import HomeThird from '../molecules/HomeThird'
import PageContainer from '../PageContainer'
import HomeFourth from '../molecules/HomeFourth'
import HomeFifth from '../molecules/HomeFifth'
import HomeSixth from '../molecules/HomeSixth'
import HomeSeventh from '../molecules/HomeSeventh'
import EarnUp from '../molecules/EarnUp'

const Home = () => {
    return (
        <div>
            <PageContainer bgColor="bg-surface">
                <HomeFirst />
            </PageContainer>
            <PageContainer bgColor="bg-white">
                <HomeMarketCard />
            </PageContainer>
            <PageContainer bgColor="bg-light">
                <HomeThird />
            </PageContainer>
            <PageContainer bgColor="bg-surface">
                <HomeFourth />
            </PageContainer>
            <PageContainer bgColor="bg-light">
                <HomeFifth />
            </PageContainer>
            <PageContainer bgColor="bg-surface">
                <HomeSixth />
            </PageContainer>
            <PageContainer bgColor="bg-image">
                <HomeSeventh />
            </PageContainer>
            <PageContainer bgColor="bg-foto">
                <EarnUp />
            </PageContainer>



        </div>
    )
}

export default Home