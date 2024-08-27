import React from 'react';
import Home from './pages/Home';
import './styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyPage from './pages/CompanyPage';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/company/:companyName" element={<CompanyPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
