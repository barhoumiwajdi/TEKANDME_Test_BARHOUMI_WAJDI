import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

function HeroSection() {
    const videoRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;
        const playVideo = () => {
            if (video) {
                video.play().catch(error => {
                    console.error('Autoplay prevented:', error);
                });
            }
        };
        playVideo();
    }, []);
    return (
        <div className="hero-section ">
            <video ref={videoRef} className="hero-video" loop muted autoPlay playsInline>
                <source src="https://s3-figma-videos-production-sig.figma.com/video/930590723035425412/TEAM/0d1f/e6f0/-9a06-4529-8d8e-547ab140aa4e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrdnPC26aRyzcNKe0yjSINRjvjPIDWH8x89UniJm8LSfOM3wGC1VDWj9OK4tL2ioE3svS8cwVA1RaHlHXunWJGLqK2o2cCSox8uXeHwWtrlKevlrjQz3S7mNr4HsIG14K4aCuwFnENPy4WlN3yKnAv3CmlvtuPH5WESkzOEsQ9B7EWjLIIa~B2oreBgxXOC9YHK1m4IcJFgYJTO5WSPC4qmJrPO8uY9mf6dDVuOLPLvZH4cfWQ2qAdtK~5k0SI-jBZbtbNzA-h73iyO475WLCLUXrc2GhgtKUmTCq~v-GKLt63mJnk6AAhXwizIZarm8vp8GRgUnykeaUbPzoU5gnw__" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-text col-12 col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <li>30 ans d’activité à monaco</li>
                <h3>L'Art de la Couverture : Notre Monde en toiture</h3>
                <p>Aenean sed adipiscing diam donec adipiscing. Aenean euismod elementum nisi quis eleifend quam. Lacus suspendisse faucibus interdum posuere lorem.</p>
            </div>
        </div>
    );
}

export default HeroSection;