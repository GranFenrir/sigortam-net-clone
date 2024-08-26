import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../photos/app-logo-title.svg'
import qrkod from '../photos/qrkod.png'
import guvendamgasi from '../photos/guvendamgasi.png'
import ssl from '../photos/ssl.png'
import design from '../photos/if-design-award-2024-vertical.png'
import design2 from '../photos/snet-gold-winner-badge.png'

const Footer = () => {
    return (
        <footer className="bg-light pt-5">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={logo} alt="Sigortam.net Logo" className="mb-3" />
            <p>© 2000-2024 Sigortam.net</p>

          </div>
          <div className="col-md-3">
            <img src={design} alt="IF Design Award 2024" className="mb-3" style={{maxWidth:"100px",maxHeight:"1000px"}}   />
            <img src={design2} alt="Snet Gold Winner Badge" className="mb-3" style={{maxWidth:"1000px",maxHeight:"100px"}}   />
          </div>
          <div className="row mt-4">
          <div className="col-md-2">
            <h5>Ürünlerimiz</h5>
            <ul className="list-unstyled">
              <li>Kasko Sigortası</li>
              <li>Trafik Sigortası</li>
              <li>İMM Sigortası</li>
              <li>Tamamlayıcı Sağlık Sigortası</li>
              <li>Özel Sağlık Sigortası</li>
              <li>Konut Sigortası</li>
              <li>DASK</li>
              <li>Evim Güvende Sigortası</li>
              <li>Ferdi Kaza Sigortası</li>
              <li>Telefon Kaskosu</li>
              <li>Evcil Hayvan Sigortası</li>
              <li>Seyahat Sağlık Sigortası</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Merak Edilenler</h5>
            <ul className="list-unstyled">
              <li>Günlük, Haftalık ve Aylık Kasko</li>
              <li>Doğum Sigortası Fiyatları</li>
              <li>Hamileyken Doğum Sigortası</li>
              <li>İMM Sigortası Nedir</li>
              <li>İnternetten Trafik Sigortası Yaptırmak</li>
              <li>Sağlık Sigortası Karşılaştırma</li>
              <li>SBM Teklif Al</li>
              <li>Trafik Sigortası Şirketleri</li>
              <li>TSS Doğum Paketi</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Hızlı Erişim</h5>
            <ul className="list-unstyled">
              <li>Araç Yakıt Hesaplama</li>
              <li>Kasko Değer Listesi</li>
              <li>MTV Hesaplama</li>
              <li>ÖTV Hesaplama</li>
              <li>Trafik Sigortası Basamakları Hesaplama</li>
              <li>Tramer Kaydı Sorgulama</li>
              <li>Zorunlu Trafik Sigortası Fiyatları</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Hakkımızda</h5>
            <ul className="list-unstyled">
              <li>Biz Kimiz?</li>
              <li>İletişim</li>
              <li>Ödüllerimiz</li>
              <li>İşlem Rehberi</li>
              <li>Kariyer</li>
              <li>Kullanıcı Sözleşmesi</li>
              <li>Kişisel Verilerin Korunması</li>
              <li>Gizlilik ve Çerez Politikası</li>
              <li>Çerez Tercihleri</li>
              <li>Sigortam.net Basketbol Takımı</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Yardımcı olmaya hazırız</h5>
            <p className="font-weight-bold">444 24 00</p>
            <h6>Bizi Takip Edin</h6>
            <div className="d-flex gap-3 mb-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
            <div>
              <img src={guvendamgasi} alt="Güven Damgası" className="mr-3" style={{maxWidth:"50px",maxHeight:"50px"}} />
              <img src={qrkod} alt="QR Kod" style={{maxWidth:"50px",maxHeight:"50px"}}  />
              <img src={ssl} alt="SSL" style={{maxWidth:"50px",maxHeight:"50px"}} />
              
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>Sigortam.net bir <strong>iLab</strong> grup şirketidir.</p>
            <p>Kariyer.net - Arabam.com - Cimri - Emlakjet - Endeksa - HangiKredi - Neredekal.com - ChemOrbis - SteelOrbis</p>
          </div>
        </div>
        </div>
        </div>
    </footer>
    
    );
}

export default Footer;