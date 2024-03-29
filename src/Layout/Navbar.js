import React from 'react'
import logo from '../Assets/Logo.png'
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white  fixed-top">
            <div className="container">
                <a className="navbar-brand" href="."><img src={logo} alt="Logo" height={32} width={62} /> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href=".">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href=".">a propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href=".">Bureau d’études</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href=".">Sécurisation</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href=".">Action</a></li>
                                <li><a className="dropdown-item" href=".">Another action</a></li>

                                <li><a className="dropdown-item" href=".">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href=".">Réalisations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href=".">Actualités</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="Contactbtn" type="submit">Contact</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar