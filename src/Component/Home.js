import React from 'react'
import Navbar from '../Layout/Navbar'
import ArtSection from './Section/ArtSection'
import Bureau from './Section/Bureau'
import LogoCarousel from '../Widgets/LogoCarousel'
import Footer from '../Layout/Footer'
import NosService from './Section/NosService'
import VideoSection from './Section/VideoSection'
import Projet from './Section/Projet'
import MonacoSection from './Section/MonacoSection'
import PublicationInstagramSection from './Section/PublicationInstagramSection'
import RealisationSection from './Section/RealisationSection'
import HeroSection from './Section/HeroSection'
import HistoireSection from './Section/HistoireSection'
import StatsSection from './Section/StatsSection'
import AvisSection from './Section/AvisSection'


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
            <RealisationSection />
            <PublicationInstagramSection />


        </>
    )
}

export default Home