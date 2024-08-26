import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../photos/app-logo-title.svg';
import qrkod from '../photos/qrkod.png';
import guvendamgasi from '../photos/guvendamgasi.png';
import ssl from '../photos/ssl.png';
import design from '../photos/if-design-award-2024-vertical.png';
import design2 from '../photos/snet-gold-winner-badge.png';

const Footer = () => {
  return (
    <footer className="bg-light pt-5">
      <div className="container">
        <div className="row d-flex">
          <div className="col-3">
            <img src={logo} alt="Sigortam.net Logo" className="mb-3" />
            <p>© 2000-2024 Sigortam.net</p>
          </div>
          <div className="col-6 offset-8">
            <img src={design} alt="IF Design Award 2024" className="mb-3" style={{ maxWidth: "100px", maxHeight: "100px" }} />
            <img src={design2} alt="Snet Gold Winner Badge" className="mb-3" style={{ maxWidth: "100px", maxHeight: "100px" }} />
          </div>
        </div>
        <div>
          <div className="row mt-4">
            <div className="col-md-2">
              <h5>Ürünlerimiz</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Kasko Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Trafik Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>İMM Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Tamamlayıcı Sağlık Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Özel Sağlık Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Konut Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>DASK</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Evim Güvende Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Ferdi Kaza Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Telefon Kaskosu</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Evcil Hayvan Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Seyahat Sağlık Sigortası</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Merak Edilenler</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Günlük, Haftalık ve Aylık Kasko</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Doğum Sigortası Fiyatları</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Hamileyken Doğum Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>İMM Sigortası Nedir</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>İnternetten Trafik Sigortası Yaptırmak</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Sağlık Sigortası Karşılaştırma</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>SBM Teklif Al</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Trafik Sigortası Şirketleri</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>TSS Doğum Paketi</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Hızlı Erişim</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Araç Yakıt Hesaplama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Kasko Değer Listesi</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>MTV Hesaplama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>ÖTV Hesaplama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Trafik Sigortası Basamakları Hesaplama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Tramer Kaydı Sorgulama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Zorunlu Trafik Sigortası Fiyatları</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Hakkımızda</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Biz Kimiz?</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>İletişim</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Ödüllerimiz</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>İşlem Rehberi</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Kariyer</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Kullanıcı Sözleşmesi</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Kişisel Verilerin Korunması</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Gizlilik ve Çerez Politikası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Çerez Tercihleri</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Sigortam.net Basketbol Takımı</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Yardımcı olmaya hazırız</h5>
              <p className="font-weight-bold">444 24 00</p>
              <h6>Bizi Takip Edin</h6>
              <div className="d-flex gap-3 mb-3">
                <a href="#" style={{ textDecoration: "none", color: "black" }}><FaFacebookF /></a>
                <a href="#" style={{ textDecoration: "none", color: "black" }}><FaInstagram /></a>
                <a href="#" style={{ textDecoration: "none", color: "black" }}><FaTwitter /></a>
                <a href="#" style={{ textDecoration: "none", color: "black" }}><FaLinkedinIn /></a>
                <a href="#" style={{ textDecoration: "none", color: "black" }}><FaYoutube /></a>
              </div>
              <div>
                <img src={guvendamgasi} alt="Güven Damgası" className="mr-3" style={{ maxWidth: "50px", maxHeight: "50px" }} />
                <img src={qrkod} alt="QR Kod" style={{ maxWidth: "50px", maxHeight: "50px" }} />
                <img src={ssl} alt="SSL" style={{ maxWidth: "50px", maxHeight: "50px" }} />
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
