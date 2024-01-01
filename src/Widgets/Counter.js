import React from 'react'
import './Counter.css'
function Counter() {
    return (
        <div className='container counter mt-5'>
            <div className='row mt-5 p-5'>
                <div className='col mt-5 text-center'>

                    <h2 className="counter display-3 p-3 text-dark d-block">+30</h2>
                    <span className="h5 text-gray mt-3">Ans d’activité</span>
                </div>
                <div className='col mt-5 text-center'>

                    <h2 className="counter display-3 p-3 text-dark d-block">+100</h2>
                    <span className="h5 text-gray mt-3">Projets terminés</span>
                </div>
                <div className='col mt-5 text-center'>

                    <h2 className="counter display-3 p-3 text-dark d-block">32</h2>
                    <span className="h5 text-gray mt-3">Experts pour vous accompagner</span>
                </div>

            </div>
        </div>
    )
}

export default Counter