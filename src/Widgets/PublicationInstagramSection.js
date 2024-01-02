import React from 'react'
import './PublicationInstagramSection.css'
import img1 from '../Assets/Rectangle 34624367.png'
import img2 from '../Assets/Rectangle 34624368.png'
import img3 from '../Assets/Rectangle 34624369.png'
import img4 from '../Assets/DA ASSETconseils.png'
function PublicationInstagramSection() {
    return (
        <div className='container-fluid w-100 pt-5' style={{ backgroundColor: '#EDF0F3' }}>

            <div className="container section1 ">
                <h3 className=' '>Ce qu’il se passe sur insta</h3>
                <div id='titlelogo d-flex justify-content-end align-items-end'>

                    <div className="    text-center  ">
                        <a className="carousel-control-prev position-relative d-inline me-4" href="#carouselLogos1" data-bs-slide="prev">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                            </svg>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next position-relative d-inline" href="#carouselLogos1" data-bs-slide="next">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                            </svg>
                            <span className="visually-hidden">Next</span>
                        </a>





                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="lc-block">
                            <div id="carouselLogos1" className="carousel slide pt-5 pb-4" data-bs-ride="carousel">

                                <div className="carousel-inner px-5">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-6 col-md-3 col-lg-3  h-100 align-self-center">
                                                <img className="d-block w-100  px-3 mb-3" src={img1} alt="" />
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3  h-100 align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img2} alt="" />
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3  h-100  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img3} alt="" />
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3 h-100 align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img4} alt="" />
                                            </div>

                                        </div>

                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-6 col-md-3 col-lg-3  h-100 align-self-center">
                                                <img className="d-block w-100  px-3 mb-3" src={img1} alt="" />
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3  h-100 align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img2} alt="" />
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3  h-100  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src={img3} alt="" />
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3 h-100 align-self-center">
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

export default PublicationInstagramSection