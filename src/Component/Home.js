import React from 'react'

import ArtSection from './Section/ArtSection'
import Bureau from './Section/Bureau'
import LogoCarousel from '../Widgets/LogoCarousel'

import NosService from './Section/NosService'
import VideoSection from './Section/VideoSection'
import Projet from './Section/Projet'
import MonacoSection from './Section/MonacoSection'
import PublicationInstagramSection from './Section/PublicationInstagramSection'

import HeroSection from './Section/HeroSection'
import HistoireSection from './Section/HistoireSection'
import StatsSection from './Section/StatsSection'
import AvisSection from './Section/AvisSection'
import FAQSECTION from './Section/FAQSection'


function Home() {
    return (
        <>

            <HeroSection />
            <HistoireSection />
            <MonacoSection />
            <StatsSection />
            <NosService />
            <VideoSection />
            <ArtSection />
            <Bureau />
            <AvisSection />
            <LogoCarousel />
            <Projet />
            <FAQSECTION />
            <PublicationInstagramSection />


        </>
    )
}

export default Home