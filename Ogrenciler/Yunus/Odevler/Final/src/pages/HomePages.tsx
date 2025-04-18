"use client"

import dynamic from "next/dynamic"
import HeroSection from "@/components/templates/Hero/HeroSection"
const MarketSection = dynamic(() => import("@/components/organism/MarketSection/MarketSection"))
const HowItWorks = dynamic(() => import("@/components/organism/HowItWorks/HowItWorks"))
const WhatIsRockie = dynamic(() => import("@/components/templates/WhatIsRockie/WhatIsRockie"))
const FreeYourMoneySection = dynamic(() => import("@/components/templates/FreeYourMoneySection/FreeYourMoneySection"))
const OurCustomersSection = dynamic(() => import("@/components/templates/OurCustomersSection/OurCustomersSection"))
const InfoSection = dynamic(() => import("@/components/organism/InfoSection/InfoSection"))
const Footer = dynamic(() => import("@/components/organism/Footer/Footer"))

const HomePage = () => {
    return (
        <div className="d-flex flex-wrap">
            <HeroSection />
            <MarketSection />
            <HowItWorks />
            <WhatIsRockie />
            <FreeYourMoneySection />
            <OurCustomersSection />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default HomePage