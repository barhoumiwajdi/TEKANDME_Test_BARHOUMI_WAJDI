import React from 'react'
import IMG from '../../Assets/IMG.png'
import './HistoireSection.css'
function HistoireSection() {
    return (

        <div className='container pt-5  mb-5 SectionHistoire' >
            <div className='row d-flex'>
                <div className='col-12 col-md-6 col-sm-12 col-lg-6 '>
                    <img src={IMG} alt="Logo" height={'90%'} width={'90%'} />
                </div>
                <div className='p-5 col-12 col-md-6  col-lg-6 d-flex justify-content-center align-items-center center-block'>
                    <div>
                        <h3>
                            Notre Histoire en Quelques Tuiles
                        </h3>



                        <p>
                            Depuis 30 ans, EM Couverture s'est taillé une réputation impeccable dans le monde des toits à Monaco. Nous avons réinventé la couverture, tout en gardant nos pieds (et nos tuiles) sur terre. Découvrez notre parcours unique et notre engagement envers l'excellence.
                        </p>
                        <button className='btnHistoire'>EN SAVOIR PLUS</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HistoireSection