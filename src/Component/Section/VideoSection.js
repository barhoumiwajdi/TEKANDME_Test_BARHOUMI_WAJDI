import React from 'react';
import flagmn from '../../Assets/MC - Monaco.png';
import castor from '../../Assets/castor-png-2.png';
import youtubeicon from '../../Assets/Frame-youtube-icon.png';
import './VideoSection.css'; // Create a separate CSS file for styling

function VideoSection() {
    return (
        <div className='container-fluid w-100 pt-5' style={{ backgroundColor: '#EDF0F3' }}>
            <section className="video-section  d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row text-center mt-5 mb-5">
                        <div className="col-12 mt-5 pb-5">
                            <h1 className="mt-5">Watch Our Latest Videos</h1>

                            <p className="mt-5 ">
                                Découvrez la villa Carmelha à{' '}
                                <img src={flagmn} alt="img" className="m-2 me-5" />
                                <button className="btn btn-service text-center text-white align-items-center justify-content-center bg-dark">
                                    voir le projet
                                </button>
                            </p>

                            <div className="mt-5 d-flex justify-content-center align-items-center pt-5    ">
                                <div className="row-video-section">
                                    <video className="section-video" loop muted autoPlay playsInline>
                                        <source src="https://s3-figma-videos-production-sig.figma.com/video/930590723035425412/TEAM/0d1f/e6f0/-9a06-4529-8d8e-547ab140aa4e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrdnPC26aRyzcNKe0yjSINRjvjPIDWH8x89UniJm8LSfOM3wGC1VDWj9OK4tL2ioE3svS8cwVA1RaHlHXunWJGLqK2o2cCSox8uXeHwWtrlKevlrjQz3S7mNr4HsIG14K4aCuwFnENPy4WlN3yKnAv3CmlvtuPH5WESkzOEsQ9B7EWjLIIa~B2oreBgxXOC9YHK1m4IcJFgYJTO5WSPC4qmJrPO8uY9mf6dDVuOLPLvZH4cfWQ2qAdtK~5k0SI-jBZbtbNzA-h73iyO475WLCLUXrc2GhgtKUmTCq~v-GKLt63mJnk6AAhXwizIZarm8vp8GRgUnykeaUbPzoU5gnw__" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="video-hero-text col-12 col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="69" viewBox="0 0 68 69" fill="none">
                                            <circle cx="34" cy="34.5117" r="33" fill="url(#paint0_linear_1_301)" stroke="url(#paint1_linear_1_301)" stroke-width="2" />
                                            <path d="M41.9252 35.1975L31.2612 43.862C29.9542 44.924 28 43.9938 28 42.3098V26.3138C28 24.7034 29.8061 23.7534 31.1331 24.6657L41.7971 31.9972C42.8974 32.7537 42.9616 34.3555 41.9252 35.1975Z" fill="#FCFCFC" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1_301" x1="34" y1="2.51172" x2="40.8571" y2="81.9403" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#2B2B2B" />
                                                    <stop offset="1" stop-color="#625D31" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1_301" x1="34" y1="-6.05971" x2="34" y2="79.6546" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#C49514" />
                                                    <stop offset="1" stop-color="#F4C02F" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <img
                                    height={'100%'}
                                    width={'100%'}
                                    src={castor}
                                    alt="img "
                                    className="castor-image col-3"
                                />
                            </div>

                            <button className="btnVideo mt-5">
                                <img height={'24px'} width={'24px'} src={youtubeicon} alt="img" />
                                Voir notre chaine youtube
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VideoSection;
