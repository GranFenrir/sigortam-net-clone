import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import one from '../photos/1.png';
import two from '../photos/2.png';
import three from '../photos/3.png';
import four from '../photos/4.png';
import five from '../photos/5.png';
import six from '../photos/6.png';
import seven from '../photos/7.png';
import eight from '../photos/8.png';
import nine from '../photos/9.svg';
import ten from '../photos/10.svg';
import eleven from '../photos/11.svg';

const Home = () => {
    const handleDropdownToggle = () => {
        document.getElementById('productsDropdown').click();
    };

    return (
        <div>

            <section style={{ paddingTop: "7rem", backgroundColor: "#f5f7f9", paddingBottom: "3.5rem" }}>

                <div className="container text-center">

                    <h1 style={{ fontFamily: "sans-serif", fontSize: "3rem" }} className='fw-bolder'>Sigortada Güvenin Adresi</h1>
                    <small className="text-muted d-block" style={{ fontSize: "1.2rem", marginBottom: "3rem" }}>Doğru Ürün. İyi Fiyat. 7/24 Hizmet.</small>

                    <div className="row justify-content-center" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {/* Üst Sıradaki Kartlar */}
                        <div className="col mb-4">
                            <div className="card custom-card">
                                <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card custom-card">
                                <img src={two} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Elektrikli Araç Kaskosu" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>Elektrikli Araç Kaskosu</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card custom-card">
                                <img src={three} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Tamamlayıcı Sağlık" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>Tamamlayıcı Sağlık</h5>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            {/* Alt Sıradaki Kartlar */}
                            <div className="col mb-4">
                                <div className="card custom-card">
                                    <img src={four} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Trafik Sigortası" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>Trafik Sigortası</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card custom-card">
                                    <img src={five} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="İMM" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>İMM</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card custom-card">
                                    <img src={six} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Özel Sağlık" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>Özel Sağlık</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card custom-card">
                                    <img src={seven} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Seyahat Sağlık" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>Seyahat Sağlık</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card custom-card">
                                    <img src={eight} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="DASK" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>DASK</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#" onClick={handleDropdownToggle} className="mt-4 d-block text-primary">
                        Tüm Ürünleri Gör
                    </a>
                </div>
            </section>

            <section >
                <div className="container text-center pt-5">

                    <p className='fw-bolder fs-2'>Poliçemi neden Sigortam.net’ten almalıyım?</p>

                    <div className='row justify-content-center pt-xl-5'>
                        <div className='col'>
                            <div className='custom-card'>
                                <img src={nine} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Doğru Ürun" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Doğru Ürün</h5>
                                    <p className='card-text text-muted d-block'>Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından ucuzunu, sana uygununu ve kapsamlısını buluyoruz. Net teminatlar ve net fiyatlarla kararın hep net olsun</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='custom-card'>
                                <img src={ten} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="İyi Fiyat" />
                                <div className='card-body'>
                                    <h5 className='card-title'>İyi Fiyat</h5>
                                    <p className='card-text text-muted d-block'>Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde bütçeni düşünerek “en iyi fiyat garantisi” sunuyoruz.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='custom-card'>
                                <img src={eleven} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="7/24 Hizmet" />
                                <div className='card-body'>
                                    <h5 className='card-title'>7/24 Hizmet</h5>
                                    <p className="text-muted d-block card-text">24 yıllık tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her ihtiyacında yanındayız. Üstelik hasar anında saniyeler içinde bize ulaşabilirsin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>

            </section>



        </div>
    );
};

export default Home;
