import React from 'react'
import './PublicationInstagramSection.css'
import img1 from '../Assets/Rectangle 34624367.png'
import img2 from '../Assets/Rectangle 34624368.png'
import img3 from '../Assets/Rectangle 34624369.png'
import img4 from '../Assets/DA ASSETconseils.png'
function PublicationInstagramSection() {
    return (
        <div className='section1'>


            <h3>Ce qu’il se passe sur insta</h3>

            <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper container-sm d-flex  justify-content-around">
                            <div className="card m-2 "  >
                                <img src={img1} className="card-img-top" alt="..." />

                            </div><div className="card m-2" >
                                <img src={img2} className="card-img-top" alt="..." />

                            </div>
                            <div className="card m-2"  >
                                <img src={img3} className="card-img-top" alt="..." />

                            </div>
                            <div className="card m-2"  >
                                <img src={img4} className="card-img-top" alt="..." />

                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <button className='btn btn-outline-light text-dark'>Rejoignez-nous sur instagram</button>
            </div>

        </div>

    )
}

export default PublicationInstagramSection