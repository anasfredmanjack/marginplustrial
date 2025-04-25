import React from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import FeaturedOn from '@/components/featured-on'
import InvestConfidence from '@/components/invest-confidence'
import InvestmentOpportunities from '@/components/investment-opportunities'
import AfricaFuture from '@/components/africa-future'
import NeedFunding from '@/components/need-funding'
import IndustryLeaders from '@/components/industry-leaders'
import AppShowcase from '@/components/app-showcase'
import Footer from '@/components/footer'

export default function Home() {
    return (
    <div>
        <Header/>
        <HeroSection />
        <FeaturedOn />
        <InvestConfidence />
        <InvestmentOpportunities/>
        <AfricaFuture/>
        <NeedFunding/>
        <IndustryLeaders/>
        <AppShowcase/>
        <Footer/>
    </div>
  )
}
