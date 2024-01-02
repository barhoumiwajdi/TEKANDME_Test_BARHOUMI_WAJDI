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
        <div className="hero-section">
            <video ref={videoRef} className="hero-video" loop muted autoPlay playsInline>
                <source src="https://s3-figma-videos-production-sig.figma.com/video/930590723035425412/TEAM/0d1f/e6f0/-9a06-4529-8d8e-547ab140aa4e?Expires=1704672000&Signature=eDEvMIXcrl6aRc67pV3o~QtthINyQOplyqxPcNLoXjwk~kh7geEphwzdLd~99M2N2VWJ8Jir64Tc72hVVrUvCwAJVAhFwoteH-AnImS97qNBSscN~Inr-JTMInpwcCRVZ24tAfRFtLfMvdDz89S7odMydONDnxCyDI1Ny9xRZ~od0BQYUPmqwol03psSM~NPU6jafzLggNS49Y0WX3hjEldaceidBazGFUTsz0bLs~opoci0X2oftqGmxI3wWq7ZF313tFa~8-Ihvu7wPyVIJ~BqLM70hKTYjC4WpKUy7sjQlj4YdwJZ4TuoMZhIdr1LVP3OYNwiGC6WZZGHCfVcOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" type="video/mp4" />
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