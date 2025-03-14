import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { MyNavbar } from './components/MyNavbar/MyNavbar'
import { Footer } from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SobreNosotros } from './components';

function App() {
    return (
        <>
            <MyNavbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre-nosotros' element={<SobreNosotros />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
