import React from 'react'
import Navbar from '../Layout/Navbar'
import HeroSection from '../Layout/HeroSection'




import ArtSection from './ArtSection'
import Bureau from './Bureau'
import LogoCarousel from '../Widgets/LogoCarousel'
import PrenonContact from './PrenonContact'



import Footer from '../Layout/Footer'
import Histoire from './Section/Histoire'
import NosService from './Section/NosService'

import VideoSection from './Section/VideoSection'
import Projet from './Section/Projet'
import StatsSection from '../Widgets/StatsSection'
import MonacoSection from './Section/MonacoSection'
import PublicationInstagramSection from '../Widgets/PublicationInstagramSection'
import RealisationSection from './RealisationSection'

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="container-fluid " style={{ backgroundColor: '#EDF0F3 ' }}>

                <Histoire />
                <MonacoSection />
                <StatsSection />
                <NosService />
                <VideoSection />
            </div>
            <ArtSection />
            <div className="container-fluid " style={{ backgroundColor: '#EDF0F3 ' }}>

                <Bureau />

                <PrenonContact />

                <LogoCarousel />
                <Projet />

                <RealisationSection />
                <PublicationInstagramSection />
            </div>
            <Footer />
            {/*  


            </div>
            
      
                  
       */}

        </>
    )
}

export default Home