import React from 'react';
import Home from './pages/Home';
import './styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyPage from './pages/CompanyPage';
import Kasko from './pages/Kasko';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/company/:companyName" element={<CompanyPage />} />
                    <Route path="/kasko" element={<Kasko />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
