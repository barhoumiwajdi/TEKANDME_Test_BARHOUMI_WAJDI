import React from 'react'
import Navbar from '../Layout/Navbar'





import ArtSection from './ArtSection'
import Bureau from './Bureau'
import LogoCarousel from '../Widgets/LogoCarousel'
import PrenonContact from './PrenonContact'
import Footer from '../Layout/Footer'
import NosService from './Section/NosService'
import VideoSection from './Section/VideoSection'
import Projet from './Section/Projet'
import MonacoSection from './Section/MonacoSection'
import PublicationInstagramSection from '../Widgets/PublicationInstagramSection'
import RealisationSection from './RealisationSection'
import HeroSection from './Section/HeroSection'
import HistoireSection from './Section/HistoireSection'
import StatsSection from './Section/StatsSection'

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />

            <HistoireSection />
            <MonacoSection />
            <StatsSection />

            <NosService />
            <VideoSection />
            <ArtSection />


            <Bureau />

            <PrenonContact />

            <LogoCarousel />
            <Projet />

            <RealisationSection />
            <PublicationInstagramSection />

            <Footer />
            {/*  


            </div>
            
      
                  
       */}

        </>
    )
}

export default Home