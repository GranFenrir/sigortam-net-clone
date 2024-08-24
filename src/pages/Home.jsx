import React from 'react';
import { useEffect, handleDropdownToggle, useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
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
import feature1 from '../photos/feature1.svg';
import feature2 from '../photos/feature2.svg';
import phone from '../photos/phone.jpg';
import '../components/Home.css';

const Home = () => {
    const [activeCarousel, setActiveCarousel] = useState(null);



    useEffect(() => {
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');
        const text1 = document.getElementById('text1');
        const text2 = document.getElementById('text2');
    
        const onScroll = () => {
            const scrollY = window.scrollY;
            const triggerPoint1 = 800; // Adjust for when text1 should appear
            const triggerPoint2 = 1400; // Adjust for when text2 should appear
    
            if (scrollY >= triggerPoint1 && scrollY < triggerPoint2) {
                image1.classList.add('show');
                text1.classList.add('show');
                image2.classList.remove('show');
                text2.classList.remove('show');
            } else if (scrollY >= triggerPoint2) {
                image1.classList.add('zoom-out');
                text1.classList.remove('show');
                image2.classList.add('show');
                text2.classList.add('show');
            } else {
                image1.classList.remove('show', 'zoom-out');
                image2.classList.remove('show', 'zoom-out');
                text1.classList.remove('show');
                text2.classList.remove('show');
            }
        };
    
        window.addEventListener('scroll', onScroll);
    
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    







    return (
        <div>

            <section style={{ paddingTop: "7rem", backgroundColor: "#f5f7f9", paddingBottom: "3.5rem" }}>

                <div className="container text-center">

                    <h1 style={{ fontFamily: "sans-serif", fontSize: "3rem" }} className='fw-bolder'>Sigortada Güvenin Adresi</h1>
                    <small className="text-muted d-block" style={{ fontSize: "1.2rem", marginBottom: "3rem" }}>Doğru Ürün. İyi Fiyat. 7/24 Hizmet.</small>

                    <div className="row justify-content-center" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        {/* Üst Sıradaki Kartlar */}
                        <div className="col mb-4">
                            <div className="card custom-card ">
                                <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card custom-card ">
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
                                    <h5 className='card-title fw-bolder'>Doğru Ürün</h5>
                                    <p className='card-text text-muted d-block'>Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından ucuzunu, sana uygununu ve kapsamlısını buluyoruz. Net teminatlar ve net fiyatlarla kararın hep net olsun</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='custom-card'>
                                <img src={ten} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="İyi Fiyat" />
                                <div className='card-body'>
                                    <h5 className='card-title fw-bolder'>İyi Fiyat</h5>
                                    <p className='card-text text-muted d-block'>Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde bütçeni düşünerek “en iyi fiyat garantisi” sunuyoruz.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='custom-card'>
                                <img src={eleven} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="7/24 Hizmet" />
                                <div className='card-body'>
                                    <h5 className='card-title fw-bolder'>7/24 Hizmet</h5>
                                    <p className="text-muted d-block card-text">24 yıllık tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her ihtiyacında yanındayız. Üstelik hasar anında saniyeler içinde bize ulaşabilirsin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Animation */}
                <section style={{ position: 'relative', paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>

                    <div className="container" style={{height:"2000px"}}>
                        <div className="row">
                            <div className="col">
                                <div id="text1" className="text-container">
                                    <h2>Title 1</h2>
                                    <p>Text 1</p>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div id="text2" className="text-container">
                                    <h2>Title 2</h2>
                                    <p>Text 2</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="phone-visual">
                                    <img src={phone} alt="Phone Visual" />
                                    <div className="image-container" >
                                        <img id="image1" src={feature1} alt="First Image" />
                                        <img id="image2" src={feature2} alt="Second Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </section>


            <section style={{ backgroundColor: "#f5f7f9", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
                <h1 className="text-center fw-bolder">Sigortam.net'te Sana Özel Neler Var?</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 d-flex justify-content-center mb-4">
                            <button type="button" className="btn btn-primary" onClick={() => setActiveCarousel(1)}>Carousel 1</button>
                        </div>
                        <div className="col-4 d-flex justify-content-center mb-4">
                            <button type="button" className="btn btn-primary" onClick={() => setActiveCarousel(2)}>Carousel 2</button>
                        </div>
                        <div className="col-4 d-flex justify-content-center mb-4">
                            <button type="button" className="btn btn-primary" onClick={() => setActiveCarousel(3)}>Carousel 3</button>
                        </div>
                    </div>
                </div>

                {/* Carousels */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 d-flex justify-content-center">
                            {activeCarousel === 1 && (
                                <div id="carouselExample1" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={one} className="d-block w-100" alt="Slide 1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={two} className="d-block w-100" alt="Slide 2" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            )}
                            {activeCarousel === 2 && (
                                <div id="carouselExample2" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={three} className="d-block w-100" alt="Slide 1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={four} className="d-block w-100" alt="Slide 2" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            )}
                            {activeCarousel === 3 && (
                                <div id="carouselExample3" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={five} className="d-block w-100" alt="Slide 1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={six} className="d-block w-100" alt="Slide 2" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>





        </div>
    );
};

export default Home;
