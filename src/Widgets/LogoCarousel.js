import React from 'react'
import './LogoCarousel.css'
import img1 from '../Assets/image 63.png'
import img2 from '../Assets/image 64.png'
import img3 from '../Assets/image 65.png'
import img4 from '../Assets/image 66.png'
function LogoCarousel() {
    return (
        <div className='container-fluid w-100 pt-5' style={{ backgroundColor: '#EDF0F3' }}>
            <div className="container logocarousel ">
                <div className='text-center d-flex justify-content-center align-items-center'>
                    <h2 className='me-5' >Ils parlent de nous</h2>
                    <div className='d-flex   justify-content-between align-items-end '>
                        <a className="carousel-control-prev position-relative d-inline ms-4 me-4" href="#carouselLogos" data-bs-slide="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M21 8L13 16L21 24" stroke="#FCFCFC" stroke-width="2" />
                            </svg>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next position-relative d-inline" href="#carouselLogos" data-bs-slide="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M11 24L19 16L11 8" stroke="#FCFCFC" stroke-width="2" />
                            </svg>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="lc-block">
                            <div id="carouselLogos" className="carousel slide pt-5 pb-4" data-bs-ride="carousel">
                                <div className="carousel-inner px-5">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-6 col-lg-3  h-100 align-self-center">
                                                <img className="d-block w-100  px-3 mb-3" src={img1} alt="" />
                                            </div>
                                            <div className="col-6 col-lg-3  h-100 align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img2} alt="" />
                                            </div>
                                            <div className="col-6 col-lg-3  h-100  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img3} alt="" />
                                            </div>
                                            <div className="col-6 col-lg-3 h-100 align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img4} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-6 col-lg-3  h-100 align-self-center">
                                                <img className="d-block w-100  px-3 mb-3" src={img1} alt="" />
                                            </div>
                                            <div className="col-6 col-lg-3  h-100 align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img2} alt="" />
                                            </div>
                                            <div className="col-6 col-lg-3  h-100  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img3} alt="" />
                                            </div>
                                            <div className="col-6 col-lg-3 h-100 align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img4} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LogoCarousel