import './App.css';
import React from 'react'
import data from './data'
import Header from './components/Header'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ProjectPage from './components/ProjectPage'
import ContactPage from './components/ContactPage'
import { Routes, Route, useLocation } from 'react-router-dom';
export default function App() {
    const path = useLocation();
    return (
        <div className={path.pathname === '/home' || path.pathname === '/' ? "container" :'' + 'min-w'}>
            <Header data={data} />
            <Routes>
                <Route path="/" element={
                    <>
                        <HomePage />
                        <AboutPage />
                        <ProjectPage />
                        <ContactPage />
                    </>
                }></Route>
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage /> } />
                <Route path='/projects' element={<ProjectPage />} />
            </Routes>
            {/* <HomePage /> */}

        </div>
    )
}

