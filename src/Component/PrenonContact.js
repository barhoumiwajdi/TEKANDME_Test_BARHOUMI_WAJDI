import React from 'react'
import etoile from '../Assets/Etoile.png'
import './PrenonContact.css'
import img1 from '../Assets/clara.png'
import img2 from '../Assets/francois.png'
import img3 from '../Assets/aurelien.png'
function PrenonContact() {
    return (
        <div className='container-fluid w-100 pt-5' style={{ backgroundColor: '#EDF0F3' }}>
            <div className='container prenoncontact   mb-5  '>
                <div className='row d-flex justify-content-center align-items-center contactrow'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <img src={etoile} alt="Logo" id='etoile' />
                        <h2>Ce que Pensent nos clients</h2>
                        <button style={{ color: 'black', backgroundColor: '#F4C02F' }} className='btn '>Prenons contact</button>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center  contactrow '>
                        <div >


                            <div class="card   " style={{ width: '18rem' }}>
                                <div class="card-body">

                                    <img src={img1} />
                                    <h4>Clara dupont</h4>
                                    <p class="card-text">J'ai fait appel à l'Entreprise Monégasque de Couverture pour une réparation de toit et je suis ravi du résultat. Leur équipe est compétente, efficace, et l'humour qu'ils apportent à leur travail est un vrai plus. Je les recommande vivement !</p>

                                </div>
                            </div>
                            <div class="card  mt-5  " style={{ width: '18rem' }}>
                                <div class="card-body">
                                    <img src={img2} />
                                    <h4>françois dupuis</h4>
                                    <p class="card-text">C'est rare de trouver une entreprise qui peut allier compétence technique et convivialité de cette manière. Je les recommande vivement à tous ceux qui ont besoin de services de couverture de premier ordre..</p>

                                </div>
                            </div>
                            <div class="card  mt-5  " style={{ width: '18rem' }}>
                                <div class="card-body">
                                    <img src={img3} />
                                    <h4>Aurélien lemarchand</h4>
                                    <p class="card-text">C'est un vrai plaisir de travailler avec eux. Récemment, j'ai eu besoin d'une réparation de toit en urgence, et ils ont réagi rapidement et avec professionnalisme. Le résultat était impeccable, comme toujours. Je recommande cette entreprise à tous ceux qui recherchent des experts de la couverture avec une touche d'originalité.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PrenonContact