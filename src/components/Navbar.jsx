import React from 'react';
import './Navbar.css'; // Özel CSS için
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../photos/app-logo-title.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Navbar = () => {
    
    
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={photo} alt="Sigortam.net Logo" className="navbar-logo" style={{paddingLeft:"40px", width:"auto", height:"auto"}} />
                </a>
                
                <section>
                <div className="collapse navbar-collapse justify-content-center ml-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-underline" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ürünlerimiz
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                                <li><a className="dropdown-item" href="#">Ürün 1</a></li>
                                <li><a className="dropdown-item" href="#">Ürün 2</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dropdown-toggle text-underline" href="#">Kampanyalar</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-underline" href="#" id="policyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Poliçe İşlemleri
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="policyDropdown">
                                <li><a className="dropdown-item" href="#">Poliçe İptal Başvuru</a></li>
                                <li><a className="dropdown-item" href="#">Poliçe İptal Takip</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-underline" href="#" id="infoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bilgi Merkezi
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="infoDropdown">
                                <li><a className="dropdown-item" href="#">Sigorta Blog</a></li>
                                <li><a className="dropdown-item" href="#">Hakkımızda</a></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                    </section>
                    <div className="d-flex align-items-center">
                        <div className="navbar-text me-3">
                            <span>Yardımcı olmaya hazırız</span><br />
                            <a href="tel:4442400" className="navbar-phone">444 24 00</a>
                        </div>
                        <a href="#" className="btn btn-primary">Giriş Yap / Üye Ol</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
        </nav>
    );
};

export default Navbar;
