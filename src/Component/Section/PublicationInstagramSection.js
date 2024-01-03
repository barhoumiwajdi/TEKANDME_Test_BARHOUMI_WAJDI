import React from 'react'
import './PublicationInstagramSection.css'
import img1 from '../../Assets/Rectangle 34624367.png'
import img2 from '../../Assets/Rectangle 34624368.png'
import img3 from '../../Assets/Rectangle 34624369.png'
import img4 from '../../Assets/DA ASSETconseils.png'
function PublicationInstagramSection() {
    return (
        <div className='container-fluid w-100  pt-5' style={{ backgroundColor: '#EDF0F3' }}>

            <div className="container section1 ">
                <h3 >Ce qu’il se passe sur insta</h3>
                <div className=' d-flex justify-content-center align-items-center'>
                    <div>
                        <a className="carousel-control-prev position-relative d-inline " href="#carouselLogos1" data-bs-slide="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M21 8L13 16L21 24" stroke="#FCFCFC" stroke-width="2" />
                            </svg>
                            <span className="visually-hidden">Previous</span>
                        </a>
                    </div>
                    <div>
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="lc-block">
                                    <div id="carouselLogos1" className="carousel slide pt-5 pb-4" data-bs-ride="carousel">

                                        <div className="carousel-inner ">
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-6 col-md-3 col-lg-3  h-100 align-self-center">
                                                        <img className="d-block w-100   " src={img1} alt="" />
                                                    </div>
                                                    <div className="col-6 col-md-3 col-lg-3  h-100 align-self-center">
                                                        <img className="d-block w-100  " src={img2} alt="" />
                                                    </div>
                                                    <div className="col-6 col-md-3 col-lg-3  h-100  align-self-center">
                                                        <img className="d-block w-100  " src={img3} alt="" />
                                                    </div>
                                                    <div className="col-6 col-md-3 col-lg-3 h-100 align-self-center">
                                                        <img className="d-block w-100  " src={img4} alt="" />
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-6 col-md-3 col-lg-3  h-100 align-self-center">
                                                        <img className="d-block w-100   " src={img1} alt="" />
                                                    </div>
                                                    <div className="col-6 col-md-3 col-lg-3  h-100 align-self-center">
                                                        <img className="d-block w-100  " src={img2} alt="" />
                                                    </div>
                                                    <div className="col-6 col-md-3 col-lg-3  h-100  align-self-center">
                                                        <img className="d-block w-100  " src={img3} alt="" />
                                                    </div>
                                                    <div className="col-6 col-md-3 col-lg-3 h-100 align-self-center">
                                                        <img className="d-block w-100  " src={img4} alt="" />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a className="carousel-control-next position-relative d-inline" href="#carouselLogos1" data-bs-slide="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M11 24L19 16L11 8" stroke="#FCFCFC" stroke-width="2" />
                            </svg>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='btnService mt-5 d-flex justify-content-center align-items-center'>
                <button className='instabutton'> Rejoignez-nous sur instagram</button>
            </div>
        </div>
    )
}

export default PublicationInstagramSection