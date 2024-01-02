import React from 'react'
import IMG from '../../Assets/IMG.png'
import './HistoireSection.css'
function HistoireSection() {
    return (

        <div className='container-fluid w-100 pt-5' style={{ backgroundColor: '#EDF0F3' }}>
            <div className='container   SectionHistoire' >
                <div className='row d-flex pt-5'>
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

        </div>

    )
}

export default HistoireSection