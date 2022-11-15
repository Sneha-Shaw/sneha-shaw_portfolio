import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

const Router = () => {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="" element={<Home />} />
                </Routes>
            </BrowserRouter>
         </ThemeProvider>

    )
}

export default Router