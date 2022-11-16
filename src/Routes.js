import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Project/Project'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

const Router = () => {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Navbar />
                <Routes>
                    <Route exact path="" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
            <Footer />
         </ThemeProvider>

    )
}

export default Router