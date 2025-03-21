import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { MyNavbar } from './components/MyNavbar/MyNavbar'
import { Footer } from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Blog, BlogDetails, Contacto, Equipo, SobreNosotros } from './components';

function App() {
    return (
        <>
            <MyNavbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre-nosotros' element={<SobreNosotros />} />
                <Route path='/equipo' element={<Equipo />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog-details' element={<BlogDetails />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
