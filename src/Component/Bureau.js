import React from 'react'
import IMG from '../Assets/IMGBureau.png'
import IMG2 from '../Assets/image 69.png'
import('./Bureau.css')
function Bureau() {
    return (
        <div className='container bg-light pt-5   mb-5' >
            <div className='row d-flex'>

                <div className='p-5 col-12 col-md-6  col-lg-6 d-flex justify-content-center align-items-center center-block'>
                    <div>
                        <h3>
                            Notre Histoire en Quelques Tuiles
                        </h3>



                        <p>
                            Depuis 30 ans, EM Couverture s'est taillé une réputation impeccable dans le monde des toits à Monaco. Nous avons réinventé la couverture, tout en gardant nos pieds (et nos tuiles) sur terre. Découvrez notre parcours unique et notre engagement envers l'excellence.
                        </p>
                        <button className='btn btn-outline-light text-dark'>EN SAVOIR PLUS</button>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-sm-12 col-lg-6 pt-5 '>
                    <img src={IMG} alt="photo" height={'504px'} width={'504px'} />
                </div>
            </div>

            <div className='row d-flex mt-2 '>
                <div className='col-12 col-md-6 col-sm-12 col-lg-6 pt-5 security d-flex justify-content-center align-items-center '>
                    <img src={IMG2} alt="Logo" height={'144'} width={'288'} />
                </div>
                <div className='p-5 col-12 col-md-6  col-lg-6 d-flex justify-content-center align-items-center center-block'>
                    <div>
                        <h3>
                            Notre Histoire en Quelques Tuiles
                        </h3>



                        <p>
                            Depuis 30 ans, EM Couverture s'est taillé une réputation impeccable dans le monde des toits à Monaco. Nous avons réinventé la couverture, tout en gardant nos pieds (et nos tuiles) sur terre. Découvrez notre parcours unique et notre engagement envers l'excellence.
                        </p>
                        <button className='btn btn-outline-light text-dark'>EN SAVOIR PLUS</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Bureau