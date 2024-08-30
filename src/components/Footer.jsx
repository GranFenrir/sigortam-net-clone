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
          <div className="col">
            <img src={logo} alt="Sigortam.net Logo" />
            <p>© 2000-2024 Sigortam.net</p>
          </div>
          <div className="col justify-content-end d-flex">
            <img src={design} alt="IF Design Award 2024" className="mb-3" style={{ maxWidth: "100px", maxHeight: "100px" }} />
            <img src={design2} alt="Snet Gold Winner Badge" className="mb-3" style={{ maxWidth: "100px", maxHeight: "100px" }} />
          </div>
        </div>
        <div>
          <div className="row mt-4">
            <div className="col-md-2">
              <h5>Ürünlerimiz</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Kasko Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Trafik Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>İMM Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Tamamlayıcı Sağlık Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Özel Sağlık Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Konut Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>DASK</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Evim Güvende Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Ferdi Kaza Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Telefon Kaskosu</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Evcil Hayvan Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Seyahat Sağlık Sigortası</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Merak Edilenler</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Günlük, Haftalık ve Aylık Kasko</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Doğum Sigortası Fiyatları</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Hamileyken Doğum Sigortası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>İMM Sigortası Nedir</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>İnternetten Trafik Sigortası Yaptırmak</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Sağlık Sigortası Karşılaştırma</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>SBM Teklif Al</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Trafik Sigortası Şirketleri</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>TSS Doğum Paketi</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Hızlı Erişim</h5>
              <ul className="list-unstyled ">
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Araç Yakıt Hesaplama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Kasko Değer Listesi</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>MTV Hesaplama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>ÖTV Hesaplama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Trafik Sigortası Basamakları Hesaplama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Tramer Kaydı Sorgulama</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Zorunlu Trafik Sigortası Fiyatları</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Hakkımızda</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Biz Kimiz?</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>İletişim</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Ödüllerimiz</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>İşlem Rehberi</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Kariyer</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Kullanıcı Sözleşmesi</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Kişisel Verilerin Korunması</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Gizlilik ve Çerez Politikası</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Çerez Tercihleri</a></li>
                <li><a href="#" style={{ textDecoration: "none", color: "gray" }}>Sigortam.net Basketbol Takımı</a></li>
              </ul>
            </div>
            <div className="col-md-3 justify-content-end">
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
