import React, { useState, useEffect, useRef } from 'react';
import './ArtSection.css';
import cardimg1 from '../../Assets/card-img1.png';
import cardimg2 from '../../Assets/card-img2.png';
import cardimg3 from '../../Assets/card-img3.png';

function ArtSection() {
    const [opacity, setOpacity] = useState(1);
    const [parallaxOffset, setParallaxOffset] = useState(0);
    const sectionRef = useRef();
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;

            if (section) {
                const rect = section.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const currentScrollY = window.scrollY;

                // Determine the scroll direction
                const scrollDirection = currentScrollY > prevScrollY.current ? 'down' : 'up';

                // Calculate opacity based on the scroll direction and section height
                const newOpacity = scrollDirection === 'down' ? 1 : 1 - Math.max(0, 1 - rect.top / viewportHeight);
                const newOpacity1 = scrollDirection === 'up' ? 1 : 1 - Math.max(0, 1 - rect.top / viewportHeight);

                // Calculate parallax effect
                const newParallaxOffset = -rect.top * 0.5; // Adjust the multiplier for the desired parallax effect

                setOpacity(newOpacity);
                setOpacity(newOpacity1);
                setParallaxOffset(newParallaxOffset);
                prevScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='container-fluid w-100 pt-5' >
            <div className="container sectionArt ">
                <div className="row">
                    <div className="fixed-background1" style={{ marginTop: '100px', opacity, transform: `translateY(${parallaxOffset}px)` }} ref={sectionRef}>
                        <h1 > Maîtrisez l'Art de la Couverture : Notre Savoir-faire en Action</h1>
                    </div>


                    <div className='row mt-5 mb-5'>
                        <div className="scrolling-element d-flex justify-content-start align-items-start mt-5 mb-5">
                            <div className="card   col-12 col-md-4 col-lg-4">
                                <img src={cardimg1} className="card-img-top p-2" alt="..." />
                                <div className="card-body1 p-3">
                                    <h6 className="card-title">Nom de la réalisation</h6>
                                    <p className="card-text">Morbi tristique senectus et netus et malesuada fames ac turpis.
                                        Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec.
                                        Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.</p>
                                    <button className='btn btn-plus-info'>Plus d’infos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5 mb-5'>
                        <div className="scrolling-element d-flex justify-content-end align-items-end mt-5 mb-5 ">
                            <div className="card   col-12 col-md-4 col-lg-4">
                                <img src={cardimg2} className="card-img-top p-2" alt="..." />
                                <div className="card-body1 p-3">
                                    <h6 className="card-title">roca team monaco</h6>
                                    <p className="card-text">Morbi tristique senectus et netus et malesuada fames ac turpis.
                                        Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec.
                                        Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.</p>
                                    <button className='btn btn-plus-info'>Plus d’infos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5 mb-5 '>
                        <div className="scrolling-element  d-flex justify-content-center align-items-center  mt-5 mb-5">
                            <div className="card   col-12 col-md-4 col-lg-4">
                                <img src={cardimg3} className="card-img-top p-2" alt="..." />
                                <div className="card-body1 p-3">
                                    <h5 className="card-title">Carmelha</h5>
                                    <p className="card-text">Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra
                                        . Ac orci phasellus egestas tellus rutrum tellus. Massa sapien faucibus et
                                        molestie ac feugiat sed lectus vestibulum. Vitae congue eu consequat ac felis donec.
                                        Sodales ut eu sem integer. Urna cursus eget nunc scelerisque. Sagittis nisl rhoncus mattis rhoncus urna.</p>
                                    <button className='btn btn-plus-info'>Plus d’infos</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ArtSection;
