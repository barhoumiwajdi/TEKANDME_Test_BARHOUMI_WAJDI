import React from 'react'
import Navbar from '../Layout/Navbar'
import HeroSection from '../Layout/HeroSection'

import Counter from '../Widgets/Counter'
import NosService from './NosService'

import ArtSection from './ArtSection'
import Bureau from './Bureau'
import LogoCarousel from '../Widgets/LogoCarousel'
import PrenonContact from './PrenonContact'
import Gallery from '../Widgets/Gallery'

import Interrogation from './Interrogation'
import Footer from '../Layout/Footer'
import Histoire from './Section/Histoire'
import CallToAction from './Section/CallToAction'
import VideoSection from './Section/VideoSection'
import Projet from './Section/Projet'

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="container-fluid " style={{ backgroundColor: '#EDF0F3 ' }}>

                <Histoire />
                <CallToAction />
                <Counter />
                <NosService />
                <VideoSection />
            </div>
            <ArtSection />
            <div className="container-fluid " style={{ backgroundColor: '#EDF0F3 ' }}>

                <Bureau />

                <PrenonContact />

                <LogoCarousel />
                <Projet />

                <Interrogation />
                <Gallery />
            </div>
            <Footer />
            {/*  


            </div>
            
      
                  
       */}

        </>
    )
}

export default Home