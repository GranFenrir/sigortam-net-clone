import React from 'react';
import { useState } from 'react';


const Kasko = () => {

    const [activeTable, setActiveTable] = useState(null);

    return (

        <div>
            <section style={{ paddingTop: "7rem", backgroundColor: "#f5f7f9", paddingBottom: "3.5rem" }}>
                <div className="container">
                    <div className="row  align-items-md-center d-flex">
                        <div className="col-12 col-md-12 col-lg-5">
                            <h1 className='fw-bold fs-3 pb-5'>Kasko Fiyatları 2024 için Teklifleri Karşılaştır, Hemen Online Satın Al</h1>
                            <ul>
                                <li className=' pb-1'>En kapsamlı poliçe için 20+ şirketin fiyatlarını karşılaştır</li>
                                <li className=' pb-1'>İhtiyacına en uygun poliçeyi internete özel indirimle al</li>
                                <li className=' pb-1'>Temsilcinin 7/24 hasar desteğinden yararlan</li>
                                <li className=' pb-1'>Aracının birden fazla ruhsat sahibi varsa, ruhsat sahiplerinden herhangi birinin TCKN/VKN’si ile teklif alabilirsin.</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-12 col-lg-5 offset-lg-2 bg-white rounded pt-3 pb-3'>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Bu bilgiler sana özel teklif hazırlayabilmemiz için gereklidir.</label>
                                    <input type="email" class="form-control" placeholder="Ruhsat Sahibi TC No veya Vergi No" required />
                                </div>
                                <div class="mb-3">
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control" placeholder="Cep Telefonu" required />
                                </div>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="button">Kasko Sigortası Teklifi Al</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </section>


            <section style={{ backgroundColor: "#f5f7f9", paddingBottom: "3.5rem" }}>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className={`col d-flex justify-content-center mb-4 ${activeTable === 1 ? 'active' : ''}`}>
                            <button
                                type="button"
                                className={`btn ${activeTable === 1 ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setActiveTable(1)}
                            >
                                İndirimler & Kampanyalar
                            </button>
                        </div>
                        <div className={`col d-flex justify-content-center mb-4 ${activeTable === 2 ? 'active' : ''}`}>
                            <button
                                type="button"
                                className={`btn ${activeTable === 2 ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setActiveTable(2)}
                            >
                                Reklam Filmleri
                            </button>
                        </div>

                    </div>
                </div>


                <div className="container">
                    <div className="row justify-content-center">
                        {activeTable === 1 && (
                            <div className="col-lg-8">
                                <div className="table-responsive">
                                    <table className="table table-striped align-middle">
                                        <thead className="bg-primary text-white">
                                            <tr>
                                                <th scope="col">Marka</th>
                                                <th scope="col">Model Yılı</th>
                                                <th scope="col">Model</th>
                                                <th scope="col">Hasarsızlık İndirimi</th>
                                                <th scope="col">Kasko Fiyatı</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ backgroundColor: "#e7f3ff" }}>
                                                <th scope="row">TOGG</th>
                                                <td>2024</td>
                                                <td>T10X V2 RWD UZUN MENZIL 160KW</td>
                                                <td>0%</td>
                                                <td>18.322 TL</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">CHERY</th>
                                                <td>2024</td>
                                                <td>TIGGO 7 PRO LUXURY</td>
                                                <td>0%</td>
                                                <td>11.837 TL</td>
                                            </tr>
                                            <tr className="bg-lightblue">
                                                <th scope="row">TOGG</th>
                                                <td>2023</td>
                                                <td>FORMENTOR 1.5 TSI 150 DSG</td>
                                                <td>30%</td>
                                                <td>14.930 TL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div><p style={{ fontSize: "11px" }} >Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile başlayacaksın.</p>
                            </div>
                        )}

                        {activeTable === 2 && (
                            <div className="col-lg-8">
                                <div className="table-responsive">
                                    <table className="table table-striped align-middle">
                                        <thead className="bg-primary text-white">
                                            <tr>
                                                <th scope="col">Hasarsız Geçirilen Yıl</th>
                                                <th scope="col">Hasarsızlık İndirimi (%)</th>
                                                <th scope="col">Kasko Hasarsızlık İndirimi Uygulaması</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ backgroundColor: "#e7f3ff" }}>
                                                <th scope="row">0</th>
                                                <td>-</td>
                                                <td>Kasko poliçesini ilk kez yaptıran sigortalı için hasarsızlık indirimi uygulanmaz.</td>
                                                
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>30%</td>
                                                <td>İlk yılını hasarsız geçiren sigortalı için ilk kasko yenilemesinde %30 hasarsızlık indirimi uygulanır.</td>
                                                
                                            </tr>
                                            <tr className="bg-lightblue">
                                                <th scope="row">2</th>
                                                <td>40%</td>
                                                <td>İkinci yılını hasarsız geçiren sigortalı için ikinci yıl kasko yenilemesinde %40 hasarsızlık indirimi uygulanır.</td>
                                               
                                            </tr>
                                        </tbody>
                                    </table>
                                </div><p style={{ fontSize: "11px" }} >Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile başlayacaksın.</p>
                            </div>
                        )}
                    </div>
                </div>

            </section>

            <section style={{ backgroundColor: "#f5f7f9", paddingBottom: "3.5rem" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <h2 className='mb-3'>Araç Kasko Sigortası</h2>
                        <h4>Araç Kasko Sigortası Nedir?</h4>
                        <p>Kasko, hasar ve kaza durumlarında aracında ortaya çıkan zarar masraflarını karşılar. Bu sayede yüksek hasar masraflarına karşı bütçeni korur. Kasko sigortan aşağıdaki durumlarda devreye girer;</p>
                        <ul>
                            <li>Aracının başka bir araçla çarpışması</li>
                            <li>Aracının başka bir araçla çarpışması</li>
                            <li>Aracını iraden dışında bir yere çarpman</li>
                            <li>Üçüncü kişilerin aracına zarar vermesi</li>
                            <li>Aracının ve parçalarının çalınması</li>
                            <li>Aracının yanması</li>
                        </ul>
                        <h4>Online Kasko Sigortası Nasıl Alınır?</h4>
                        <p>Kasko sigortanı internet üzerinden hızlı bir şekilde satın alabilirsin. Online kasko teklifi almak için T.C. kimlik ve cep telefonu numaranı yukarıda bulunan teklif alma aracına girmen yeterlidir. Sadece 2 dakika içerisinde kasko tekliflerini tek bir ekranda karşılaştırabilirsin.<br /><br />

Sigortam.net olarak kasko teklifleri arasından tercih yapmanı daha da kolaylaştırmak için sana özel ürün önerileri sunuyoruz. “En Kapsamlı”, “En Ucuz” ve “Önerilen Teklif” başlıklarıyla senin için öne çıkardığımız kasko ürünlerini inceleyebilirsin.<br /><br />

Anlaşmalı sigorta şirketlerinin teklifleri arasından aracını en geniş kapsamla koruma altına almak istiyorsan en geniş teminatlı kaskoyu seçebilir, fiyat benim için tek kriter diyorsan en ucuz kasko önerisini tercih edebilirsin. En uygun fiyata maksimum teminatlara sahip kaskoyu almak için de önerilen teklif seçeneği tam sana göre olacaktır. Sen de ihtiyaçlarına uygun poliçeleri incelemek için online kasko teklifi al, satın alma işlemin tamamlandıktan sonra poliçen e-mail adresine gönderilsin.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kasko;