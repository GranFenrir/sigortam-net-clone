import React from 'react';
import { useEffect, handleDropdownToggle, useState } from 'react';
import { Link } from 'react-router-dom';
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
import prize1 from '../photos/snet-gold-winner-badge.png';
import prize2 from '../photos/if-design-award-2024-vertical.png';
import '../components/Home.css';

const Home = () => {
    const [activeCarousel, setActiveCarousel] = useState(null);

    const insuranceCompanies = [
        "Acıbadem Sigorta", "AKSigorta", "Allianz", "Anadolu Sigorta", "Anadolu Hayat Emeklilik",
        "Aveon", "Axa Sigorta", "Axa Hayat Emeklilik", "Demir", "Doğa Sigorta",
        "Eureko", "Fibabemeklilik", "GIG Sigorta", "HDI Sigorta", "Mapfre Sigorta",
        "Neova Sigorta", "Orient Sigorta", "Quick Sigorta", "Ray Sigorta", "Sompo",
        "Türkiye Sigorta", "Türk Nippon Sigorta", "Unico Sigorta", "Zurich Sigorta"
    ];

    const [showAll, setShowAll] = useState(false);

    const displayedCompanies = showAll ? insuranceCompanies : insuranceCompanies.slice(0, 10);

    const generateUrlSlug = (companyName) => {
        return companyName
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/ğ/g, 'g')
            .replace(/ü/g, 'u')
            .replace(/ş/g, 's')
            .replace(/ı/g, 'i')
            .replace(/ö/g, 'o')
            .replace(/ç/g, 'c');
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };



    useEffect(() => {
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');
        const text1 = document.getElementById('text1');
        const text2 = document.getElementById('text2');

        const onScroll = () => {
            const scrollY = window.scrollY;
            const triggerPoint1 = 800;
            const triggerPoint2 = 1400;

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

    useEffect(() => {
        setActiveCarousel(1);
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

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div id="text1" className="text-container">
                                    <h2>Hangi ürün bana en uygun diye düşünme, biz senin için en net teklifleri sıraladık bile!</h2>
                                    <p>Tüm teminatları tek tek inceledik, ihtiyaçlarına en uygun olan teminatları belirledik. Sana özel kapsamlı ve fiyatı uygun ürün önerileri hazırladık.</p>
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
                                    <h2>Sadece 2 dakikada tüm teklifleri kolayca karşılaştır.</h2>
                                    <p>20+ sigorta şirketinden teklifleri tek platformda karşılaştır, internete özel indirimlerle uygun fiyata sigortan anında başlasın.</p>
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


            <section style={{ paddingTop: "7rem", paddingBottom: "3.5rem" }}>
                <h1 className="text-center fw-bolder">Sigortam.net'te Sana Özel Neler Var?</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={`col d-flex justify-content-center mb-4 ${activeCarousel === 1 ? 'active' : ''}`}>
                            <button
                                type="button"
                                className={`btn ${activeCarousel === 1 ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setActiveCarousel(1)}
                            >
                                İndirimler & Kampanyalar
                            </button>
                        </div>
                        <div className={`col d-flex justify-content-center mb-4 ${activeCarousel === 2 ? 'active' : ''}`}>
                            <button
                                type="button"
                                className={`btn ${activeCarousel === 2 ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setActiveCarousel(2)}
                            >
                                Reklam Filmleri
                            </button>
                        </div>
                        <div className={`col d-flex justify-content-center mb-4 ${activeCarousel === 3 ? 'active' : ''}`}>
                            <button
                                type="button"
                                className={`btn ${activeCarousel === 3 ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setActiveCarousel(3)}
                            >
                                Öne Çıkanlar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Carousels */}
                <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-10 d-flex justify-content-center">
                {activeCarousel === 1 && (
                    <div id="carouselExample1" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <iframe
                                    src="https://www.youtube.com/embed/Mv1KT2prJ1E?si=y49VOLIrRLFJwm3e"
                                    className="d-block w-100"
                                    
                                    title="Video 1"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe
                                    src="https://www.youtube.com/embed/VIDEO_ID_2"
                                    className="d-block w-100"
                                    style={{ height: "500px" }} 
                                    title="Video 2"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                )}
                {activeCarousel === 2 && (
                    <div id="carouselExample2" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <iframe
                                    src="https://www.youtube.com/embed/VIDEO_ID_3"
                                    className="d-block w-100"
                                    style={{ height: "500px" }}
                                    title="Video 3"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe
                                    src="https://www.youtube.com/embed/VIDEO_ID_4"
                                    className="d-block w-100"
                                    style={{ height: "500px" }}
                                    title="Video 4"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                )}
                {activeCarousel === 3 && (
                    <div id="carouselExample3" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <iframe
                                    src="https://www.youtube.com/embed/VIDEO_ID_5"
                                    className="d-block w-100"
                                    style={{ height: "500px" }}
                                    title="Video 5"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe
                                    src="https://www.youtube.com/embed/VIDEO_ID_6"
                                    className="d-block w-100"
                                    style={{ height: "500px" }}
                                    title="Video 6"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
</section>

            <section style={{ backgroundColor: "#f5f7f9", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
                <h1 className="text-center fw-bolder mb-5">10 Milyon Mutlu Müşteri, 50+ Milyon Poliçe Teklifi</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card custom-card h-100">
                                <div className="card-body">
                                    <p className="card-title" style={{ fontSize: "1.05rem", lineHeight: "1.5", textAlign: "left" }}>
                                        İnternetten alınan bir poliçeden <strong>çok daha fazlası.</strong> Kaza anında çekicinin gelmesinden tutun sağlık durumunuza kadar <strong>her şeyle ilgileniyorlar.</strong>
                                    </p>
                                    <p className="card-text" style={{ fontSize: "1.05rem", lineHeight: "1.5", textAlign: "right" }}>Kasım Ş.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card custom-card h-100">
                                <div className="card-body">
                                    <p className="card-title" style={{ fontSize: "1.05rem", lineHeight: "1.5", textAlign: "left" }}>
                                        Sigortam.net sayesinde evden çıkmadan <strong>tek bir telefonla</strong> trafik sigortası ve kaskoyu yaptırdım. <strong>Hızlı, sorunsuz ve güvenilir.</strong>
                                    </p>
                                    <p className="card-text" style={{ fontSize: "1.05rem", lineHeight: "1.5", textAlign: "right" }}>Murat İ.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card custom-card h-100">
                                <div className="card-body">
                                    <p className="card-title" style={{ fontSize: "1.05rem", lineHeight: "1.5", textAlign: "left" }}>
                                        Piyasadan alabileceğim kasko poliçesini aynı kapsamda <strong>taksitle, daha ucuza ve profesyonel hizmetle</strong> Sigortam.net üzerinden satın aldım.
                                    </p>
                                    <p className="card-text" style={{ fontSize: "1.05rem", lineHeight: "1.5", textAlign: "right" }}>Şaban K.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: "7rem", paddingBottom: "3.5rem" }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-sm-12 col-md-6">
                            <h2 className="fw-bold" style={{ textAlign: "left", lineHeight: "1rem" }}>Ödüllerimizden bahsetmiş <br /> <br /> miydik?</h2>
                            <p className="text-muted" style={{ textAlign: "left", marginTop: "2rem" }}>Dünyanın en prestijli ödüllerinden biri olan Stevie Awards’ta Sigorta Sektörünün En İyi Websitesi Ödülü’nü kazandık. Sizinle yürüdüğümüz bu yolda nice ödülleri kucaklamak dileğiyle...</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6 justify-flex-end">
                            <div className='row justify-content-end d-flex'>
                                <div className='col-6'>
                                    <img src={prize1} style={{ width: "220px", height: "200px"}} alt="Feature 1" />
                                </div>
                                <div className='col-6'>
                                    <img src={prize2} style={{ width: "120px", height: "200px"}} alt="Feature 2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section style={{ backgroundColor: "#f5f7f9", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
                {/* Sigorta Şirketleri */}
                <div className="container text-center mt-5">
                    <h3 className="mb-4 fw-bolder">20’den fazla sigorta şirketinden teklif al</h3>
                    <div className="container text-center mt-5">
                        
                        <div className="row">
                            {displayedCompanies.map((company, index) => (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4" key={index}>
                                    <Link to={`/company/${generateUrlSlug(company)}`}>
                                        <div className="p-4 bg-white shadow-sm rounded d-flex" style={{ height: "150px", alignItems: "center", justifyContent: "center" }}>
                                            <p className="mb-0" style={{ fontSize: "16px", color: "#333" }}>{company}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    <button className="btn btn-primary mt-3" onClick={toggleShowAll}>
                        {showAll ? "Daha Az Sigorta Şirketini Gör" : "+14 Sigorta Şirketini Gör"}
                    </button>
                </div>

                {/* Sigortam.net Hakkında En Merak Edilen 5 Soru Accordion*/}
                <div style={{ backgroundColor: "#f5f7f9", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
                    <h1 className='text-center fw-bolder mb-4'>Sigortam.net Hakkında En Merak Edilen 5 Soru</h1>

                    <div className='col-8 offset-md-2'>

                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Neden Sigortam.net’i tercih etmeliyim, farkınız nedir?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Sigortam.net Türkiye’nin ilk ve lider online sigorta brokeridir. Broker olarak farkımız, öncelikli olarak müşterilerimizi temsil etmemiz ve onların menfaatleri doğrultusunda hareket etmemizdir. Bu misyonla her zaman müşterilerimizin tarafındayız ve 20+ sigorta şirketi teklifini tek bir sayfada görmelerini, hem teminatları hem de fiyatları objektif olarak karşılaştırmalarını sağlıyoruz. Böylece müşterilerimiz ihtiyaçlarına en uygun sigortayı kolayca belirliyor ve online olarak satın alabiliyor. Ayrıca satış sonrası herhangi bir ihtiyacınızda 24 yıllık tecrübeli ekibimiz 7/24 desteğe hazır.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Poliçe satışında müşterilerden ek ücret alıyor musunuz?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Hayır, hiçbir ek ücret almıyoruz. Müşterilerimizden yalnızca sigorta şirketinin belirlediği poliçe fiyatını tahsil ediyoruz. Bu fiyat üzerinden Sigortam.net indirimleri veya iş birliği kampanyalarımız ile müşterilerimize en iyi fırsatları sunuyoruz.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Poliçe fiyatlarında indirim yapıyor musunuz?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Evet, sigorta şirketinin belirlediği poliçe fiyatı üzerinden, müşteriye özel Sigortam.net indirimleri uygulanabilir. Satın alma aşamasında kartınızdan sigorta şirketinin belirlediği tutar tahsil edilir, indirim tutarı Sigortam.net tarafından ödeme yapılan kredi kartına 1 hafta içerisinde iade edilir.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        En iyi sigorta teklifini nasıl seçeceğim?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Anlaşmalı olduğumuz 20+ sigorta şirketinin müşterilerimize özel hazırladığı teklifleri fiyat ve teminatlar açısından puanlayıp öneriler hazırlıyoruz. Bu sayede müşterilerimiz teklifler arasından; en ucuz fiyata sahip ürün, fiyat/performans skoru en iyi olan ürün ve en kapsamlı teminat içeriğine sahip ürünü kolayca görebilir. Uzun süren incelemelere gerek kalmadan ihtiyacına en uygun poliçeyi hızlıca bulur ve güvencesini başlatır.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        Sigortam.net’te kişisel bilgilerim güvende mi?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Evet, müşterilerimize özel sigorta teklifi için paylaşılan kişisel bilgiler ve ödeme bilgileri, tüm dünyada kabul edilip kullanılan SSL protokolümüz ile korunur. Sigortam.net TOBB tarafından verilen Güven Damgası’na sahip sigorta sektöründeki ilk şirkettir. Ödeme bilgileri sadece ödeme gerçekleştirilirken kullanılıp işlem sonrası kesinlikle kayıtlı tutulmaz. Bu güvenlik protokolleri sayesinde müşterilerimizin bilgileri Sigortam.net’e geldiği andan ödemenin tamamlanmasına kadar güvendedir.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


            <section style={{ backgroundColor: "#f5f7f9", paddingTop: "7rem", paddingBottom: "3.5rem" }}>

                <div className='row row-cols-6 col-6 offset-md-3'>

                    <div className="col mb-4">
                        <div className="custom-card" style={{ maxWidth: "250px", maxHeight: "250px" }}>
                            <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card h-100 w-100 ">
                            <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card ">
                            <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card ">
                            <img src={three} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card ">
                            <img src={six} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card custom-card h-100 w-100 ">
                            <img src={seven} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card ">
                            <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card ">
                            <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card ">
                            <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card ">
                            <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card ">
                            <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="custom-card ">
                            <img src={one} style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} className="card-img-top" alt="Kasko" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Kasko</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
