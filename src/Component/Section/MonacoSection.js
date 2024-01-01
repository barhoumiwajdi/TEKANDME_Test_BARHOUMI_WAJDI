import React from 'react'
import './MonacoSection.css'
import castor from '../../Assets/castor-1.png'
import flagmn from '../../Assets/MC - Monaco.png'
import flagfr from '../../Assets/FR.png'
function MonacoSection() {
    return (
        <div className='container calltoaction mt-5'>

            <div className='row d-flex ' style={{ height: '100%' }}>
                <div className='col-12 col-md-8 col-lg-8 col-xs-12   d-flex justify-content-center align-items-center center-block text-white p-5'>
                    <div className='section'>
                        <img src={flagmn} alt='image' className='m-2' />
                        <img src={flagfr} alt='image' className='m-2' />
                        <h3>
                            Numéro 1 à  <span>monaco</span>  et en région <span>PACA</span>
                        </h3>
                        <p>

                            Notre engagement envers l'excellence, la précision et la qualité nous a hissés au sommet de l'industrie de la couverture à Monaco. Nous sommes fiers de notre statut de numéro 1, acquis grâce à un travail acharné, un savoir-faire inégalé et un sens de l'innovation constant.
                            Lorsque vous choisissez notre entreprise, vous choisissez une tradition de qualité et une réputation qui ont résisté à l'épreuve du temps.
                        </p>
                        <button style={{ color: 'black', backgroundColor: '#F4C02F' }} className='btn '>Prenons contact</button>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-4 col-xs-12 d-flex  align-items-end justify-content-center CastorRow '  >
                    <div className='castor'>
                        <img src={castor} alt='image' width={'100%'} height={'100%'} id='castor' />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default MonacoSection