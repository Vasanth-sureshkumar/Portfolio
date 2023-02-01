import React from 'react'
import {NavLink ,useLocation} from 'react-router-dom'
export default function HomePage() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('VasanthResume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'VasanthResume.pdf';
                alink.click();
            })
        })
    }
    return (
        <section className='home-section' id='home'>
            <div className='home-landing-page'>
                <div className='landing-page-container'>
                    <div className='about-info'>
                        <span>Hi there, i am </span>
                        <h1>Vasanth Sureshkumar</h1>
                        <div className='role-name'><p>Front-End Developer</p></div>
                        <p>I am a passionate frontend developer based in Chennai, TamilNadu, India. My specialities are Front End technologies such as HTML, CSS, Javascript and I love building apps that are delightful to use.</p>
                    </div>
                    <div className='my-btn'>
                        
                        <button className='btn' onClick={onButtonClick}>Download CV</button>
                        
                        <NavLink to="/contact"><button className='btn'>Contact</button></NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}