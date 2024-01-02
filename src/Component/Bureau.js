import React from 'react'
import IMG from '../Assets/IMGBureau.png'
import IMG2 from '../Assets/image 69.png'
import('./Bureau.css')
function Bureau() {
    return (
        <div className='container Bureau bg-light pt-5   mb-5' >
            <div className='row d-flex'>

                <div className='p-5 col-12 col-md-6  col-lg-6 d-flex justify-content-center align-items-center center-block'>
                    <div>
                        <h3>
                            Un bureau d’études innovant
                        </h3>
                        <p>
                            Derrière chaque toit exceptionnel se cache une équipe de cerveaux brillants. Notre bureau d'études est l'endroit où l'innovation et la précision se marient pour créer des toits qui défient les conventions. Nous faisons des calculs pour que vous n'ayez pas à le faire !                        </p>
                        <button className=' btnbureau'>EN SAVOIR PLUS</button>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-sm-12 col-lg-6 pt-5 '>
                    <img src={IMG} alt="photo" height={'504px'} width={'100%'} />
                </div>
            </div>

            <div className='row d-flex mt-2 '>
                <div className='col-12 col-md-6 col-sm-12 col-lg-6 pt-5 security d-flex justify-content-center align-items-center '>
                    <img src={IMG2} alt="Logo" height={'144'} width={'288'} />
                </div>
                <div className='p-5 col-12 col-md-6  col-lg-6 d-flex justify-content-center align-items-center center-block'>
                    <div>
                        <h3>
                            Inline sécurité
                        </h3>



                        <p>
                            Massa eget egestas purus viverra. Nisi scelerisque eu ultrices vitae. Orci eu lobortis elementum nibh tellus molestie nunc non. Ultrices in iaculis nunc sed augue lacus viverra. Consequat semper viverra nam libero justo laoreet sit. Nibh praesent tristique magna sit amet. Vulputate enim nulla aliquet porttitor. Dui nunc mattis enim ut tellus elementum sagittis.
                        </p>
                        <button className='btnbureau'>EN SAVOIR PLUS</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Bureau