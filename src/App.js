import React from 'react';
import Home from './pages/Home';
import './styles.css';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>
            <Navbar/>   
            <Home />
        </div>
    );
}

export default App;
