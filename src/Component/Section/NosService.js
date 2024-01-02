import React from 'react';
import img1 from '../../Assets/card1-1.png';
import img2 from '../../Assets/card2-2.png';
import img3 from '../../Assets/card3-3.png';
import './NosService.css';

function NosService() {
    return (
        <div className='container-fluid bg-white w-100 pb-5 pt-5' style={{ backgroundColor: '#EDF0F3' }}>
            <div className='NosService container mt-5'>


                <h3>Des Toits Qui Font la pluie et <br></br> le beau temps</h3>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active ">
                            <div className="row carouselitem p-3">
                                <div className="  block text-light   col-md-4 col-lg-4 col-12 col-sm-12">

                                    <div className="gradient-overlay">
                                        <div className="svg-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill=" ">
                                                <path d="M28 26.6663C28 27.4027 27.4031 27.9997 26.6667 27.9997H5.33333C4.59696 27.9997 4 27.4027 4 26.6663V12.6518C4 12.2404 4.18996 11.852 4.51475 11.5994L15.1815 3.30308C15.6629 2.9286 16.3371 2.9286 16.8185 3.30308L27.4852 11.5994C27.81 11.852 28 12.2404 28 12.6518V26.6663ZM9.33333 19.9997V22.6663H22.6667V19.9997H9.33333Z" fill="#FCFCFC" />
                                            </svg>
                                        </div>
                                        <img src={img1} className="card-img" alt="..." height={'100%'} width={'100%'} />
                                        <div className="card-content">
                                            <h5 className="card-title">Charpente</h5>
                                            <p className="card-text">Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac...</p>

                                        </div>
                                    </div>
                                </div>
                                <div className=" block   text-light  col-md-4 col-lg-4 col-12 col-sm-12">
                                    <div className="gradient-overlay">
                                        <div className="svg-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill=" ">
                                                <path d="M27.7332 11.9999H16V22.6666H14.6667V28H6.66668C5.9303 28 5.33334 27.4031 5.33334 26.6667V14.6667H1.33334L15.1031 2.14874C15.6116 1.68642 16.3884 1.68642 16.8969 2.14874L27.7332 11.9999ZM18.6667 14.6666H30.6667V23.9999H18.6667V14.6666ZM17.3333 27.9999H32V25.3332H17.3333V27.9999Z" fill="#FCFCFC" />
                                            </svg>
                                        </div>
                                        <img src={img2} className="card-img" alt="..." height={'100%'} width={'100%'} />
                                        <div className="card-content">
                                            <h5 className="card-title">zinguerie</h5>
                                            <p className="card-text">Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac...</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="  block text-light  col-md-4 col-lg-4 col-12 col-sm-12">
                                    <div className="gradient-overlay">

                                        <div className="svg-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill=" ">
                                                <path d="M16 25.3337H18.6666V8.00029L27.1918 11.654C27.6821 11.8641 28 12.3461 28 12.8795V25.3337H30.6666V28.0003H1.33331V25.3337H3.99998V7.53345C3.99998 7.00653 4.31029 6.52904 4.79179 6.31504L15.0625 1.75025C15.399 1.60072 15.793 1.75224 15.9425 2.08871C15.9804 2.17395 16 2.26619 16 2.35947V25.3337Z" fill="#FCFCFC" />
                                            </svg>
                                        </div>
                                        <img src={img3} className="card-img" alt="..." height={'100%'} width={'100%'} />
                                        <div className="card-content">
                                            <h5 className="card-title">Façades</h5>
                                            <p className="card-text">Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac...</p>

                                        </div>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M21 8L13 16L21 24" stroke="#FCFCFC" stroke-width="2" />
                                    </svg>

                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M11 24L19 16L11 8" stroke="#FCFCFC" stroke-width="2" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='btnService mt-5 d-flex justify-content-center align-items-center'>
                        <button className='buttonservice '> voir tous nos services</button>
                    </div>
                </div>
            </div></div>
    );
}

export default NosService;
