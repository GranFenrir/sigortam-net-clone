import React from 'react';
import './Navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../photos/app-logo-title.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
                            <div className="dropdown-menu mega-dropdown" aria-labelledby="productsDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h6>Aracım</h6>
                                            <ul className="list-unstyled">
                                                <li><a className="dropdown-item" href="#">Kasko</a></li>
                                                <li><a className="dropdown-item" href="#">Trafik Sigortası</a></li>
                                                <li><a className="dropdown-item" href="#">İMM</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h6>Sağlığım</h6>
                                            <ul className="list-unstyled">
                                                <li><a className="dropdown-item" href="#">Tamamlayıcı Sağlık Sigortası</a></li>
                                                <li><a className="dropdown-item" href="#">Özel Sağlık Sigortası</a></li>
                                                <li><a className="dropdown-item" href="#">Seyahat Sağlık</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h6>Evim</h6>
                                            <ul className="list-unstyled">
                                                <li><a className="dropdown-item" href="#">DASK</a></li>
                                                <li><a className="dropdown-item" href="#">Konut Sigortası</a></li>
                                                <li><a className="dropdown-item" href="#">Evim Güvende</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h6>Diğer</h6>
                                            <ul className="list-unstyled">
                                                <li><a className="dropdown-item" href="#">Cep Telefonu</a></li>
                                                <li><a className="dropdown-item" href="#">Evcil Hayvan</a></li>
                                                <li><a className="dropdown-item" href="#">Ferdi Kaza <span className="badge bg-warning text-dark">Yeni</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
