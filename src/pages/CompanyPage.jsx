import React from 'react';
import { useParams } from 'react-router-dom';

const companyData = {
    "acibadem-sigorta": {
        name: "Acıbadem Sigorta",
        description: "Acıbadem Sigorta, sağlık sigortası konusunda uzmanlaşmış bir sigorta şirketidir.",
        logo: "https://example.com/acibadem-logo.png"
    },
    "aksigorta": {
        name: "AKSigorta",
        description: "AKSigorta, Türkiye'nin önde gelen sigorta şirketlerinden biridir ve geniş bir ürün yelpazesi sunmaktadır.",
        logo: "https://example.com/aksigorta-logo.png"
    },
    "allianz": {
        name: "Allianz",
        description: "Allianz, dünya çapında faaliyet gösteren bir sigorta ve finansal hizmetler şirketidir.",
        logo: "https://example.com/allianz-logo.png"
    },
    "anadolu-sigorta": {
        name: "Anadolu Sigorta",
        description: "Anadolu Sigorta, geniş kapsamlı sigorta çözümleri sunan Türkiye'nin en köklü sigorta şirketlerinden biridir.",
        logo: "https://example.com/anadolu-sigorta-logo.png"
    },
    "anadolu-hayat-emeklilik": {
        name: "Anadolu Hayat Emeklilik",
        description: "Anadolu Hayat Emeklilik, bireysel emeklilik ve hayat sigortası alanında lider bir şirkettir.",
        logo: "https://example.com/anadolu-hayat-emeklilik-logo.png"
    },
    "aveon": {
        name: "Aveon",
        description: "Aveon, modern ve yenilikçi sigorta çözümleri sunan bir şirkettir.",
        logo: "https://example.com/aveon-logo.png"
    },
    "axa-sigorta": {
        name: "Axa Sigorta",
        description: "Axa Sigorta, uluslararası sigorta sektöründe önemli bir oyuncu olarak bilinmektedir.",
        logo: "https://example.com/axa-sigorta-logo.png"
    },
    "axa-hayat-emeklilik": {
        name: "Axa Hayat Emeklilik",
        description: "Axa Hayat Emeklilik, bireysel emeklilik ve hayat sigortası hizmetleri sunan bir lider şirkettir.",
        logo: "https://example.com/axa-hayat-emeklilik-logo.png"
    },
    "demir": {
        name: "Demir Sigorta",
        description: "Demir Sigorta, güvenilirliği ve uygun fiyatlı sigorta çözümleriyle tanınır.",
        logo: "https://example.com/demir-logo.png"
    },
    "doga-sigorta": {
        name: "Doğa Sigorta",
        description: "Doğa Sigorta, müşterilerine çeşitli sigorta ürünleri sunan bir Türk sigorta şirketidir.",
        logo: "https://example.com/doga-sigorta-logo.png"
    },
    "eureko": {
        name: "Eureko Sigorta",
        description: "Eureko Sigorta, sigorta alanında yenilikçi çözümler sunan bir uluslararası şirkettir.",
        logo: "https://example.com/eureko-logo.png"
    },
    "fibabemeklilik": {
        name: "Fibabemeklilik",
        description: "Fibabemeklilik, bireysel emeklilik ve hayat sigortası hizmetleri sunan bir şirkettir.",
        logo: "https://example.com/fibabemeklilik-logo.png"
    },
    "gig-sigorta": {
        name: "GIG Sigorta",
        description: "GIG Sigorta, geniş kapsamlı sigorta hizmetleri sunan bir uluslararası şirkettir.",
        logo: "https://example.com/gig-sigorta-logo.png"
    },
    "hdi-sigorta": {
        name: "HDI Sigorta",
        description: "HDI Sigorta, uluslararası bir sigorta şirketi olup, çeşitli sigorta ürünleri sunmaktadır.",
        logo: "https://example.com/hdi-sigorta-logo.png"
    },
    "mapfre-sigorta": {
        name: "Mapfre Sigorta",
        description: "Mapfre Sigorta, global bir sigorta şirketi olup, geniş yelpazede sigorta çözümleri sunar.",
        logo: "https://example.com/mapfre-sigorta-logo.png"
    },
    "neova-sigorta": {
        name: "Neova Sigorta",
        description: "Neova Sigorta, İslami sigorta hizmetleri sunan bir Türk sigorta şirketidir.",
        logo: "https://example.com/neova-sigorta-logo.png"
    },
    "orient-sigorta": {
        name: "Orient Sigorta",
        description: "Orient Sigorta, uluslararası sigorta çözümleri sunan bir şirkettir.",
        logo: "https://example.com/orient-sigorta-logo.png"
    },
    "quick-sigorta": {
        name: "Quick Sigorta",
        description: "Quick Sigorta, hızlı ve esnek sigorta çözümleri sunan bir Türk sigorta şirketidir.",
        logo: "https://example.com/quick-sigorta-logo.png"
    },
    "ray-sigorta": {
        name: "Ray Sigorta",
        description: "Ray Sigorta, geniş bir ürün yelpazesi sunan ve müşteri memnuniyetine önem veren bir şirkettir.",
        logo: "https://example.com/ray-sigorta-logo.png"
    },
    "sompo": {
        name: "Sompo Sigorta",
        description: "Sompo Sigorta, global bir sigorta devi olup, çeşitli sigorta hizmetleri sunar.",
        logo: "https://example.com/sompo-logo.png"
    },
    "turkiye-sigorta": {
        name: "Türkiye Sigorta",
        description: "Türkiye Sigorta, Türkiye'nin en büyük sigorta şirketlerinden biri olup, geniş yelpazede ürünler sunmaktadır.",
        logo: "https://example.com/turkiye-sigorta-logo.png"
    },
    "turk-nippon-sigorta": {
        name: "Türk Nippon Sigorta",
        description: "Türk Nippon Sigorta, Japonya kökenli bir şirket olup, Türkiye'de çeşitli sigorta hizmetleri sunmaktadır.",
        logo: "https://example.com/turk-nippon-sigorta-logo.png"
    },
    "unico-sigorta": {
        name: "Unico Sigorta",
        description: "Unico Sigorta, yenilikçi ve esnek sigorta çözümleri sunan bir Türk sigorta şirketidir.",
        logo: "https://example.com/unico-sigorta-logo.png"
    },
    "zurich-sigorta": {
        name: "Zurich Sigorta",
        description: "Zurich Sigorta, uluslararası bir sigorta devi olarak bilinir ve geniş kapsamlı poliçeler sunar.",
        logo: "https://example.com/zurich-sigorta-logo.png"
    }
};


function CompanyPage() {
    const { companyName } = useParams();
    const company = companyData[companyName];

    if (!company) {
        return <div>Company not found</div>;
    }

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-header text-center bg-primary text-white">
                    <h1>{company.name}</h1>
                </div>
                <div className="card-body text-center">
                    <img src={company.logo} alt={company.name} className="img-fluid mb-4" style={{ maxHeight: "150px" }} />
                    <p className="lead">{company.description}</p>
                </div>
            </div>
        </div>
    );
}

export default CompanyPage;
