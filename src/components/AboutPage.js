import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AboutPage() {
    return (
        <section className='about-section'>
            <div className='about-me-section' id='about'>
                {/* <div> */}
                <h2>About Me</h2>
                {/* <div>
                <span>h</span>
                <span>who i'am</span>
                <span>hi</span>
                </div>
                
                </div> */}
                <div className='about-me-parent'>
                    <div className='about-me-container'>
                    <div className='know-me-section'>
                    <h3>Get to know me</h3>
                    <p>My name is Vasanth Sureshkumar and I'm 
                        a passionate front end web developer with 
                        an intension to build amazing Web Applications.
                        I enjoy building the web app and i'm much more 
                        interested in that. Self development is important to me and 
                        i'm constantly improving my skills and knowledge to become
                        a better Application Developer. 
                    </p>
                    {/* <a className='get-in-touch' href='#'>Get In Touch</a> */}
                    </div>
                    <div className='skills-section'>
                    <h3>My Skills</h3>
                    <div className='skills-list'>
                        <div className='skills'>HTML</div>
                        <div className='skills'>CSS</div>
                        <div className='skills'>Javascript</div>
                        <div className='skills'>React</div>
                        <div className='skills'>Angular</div>
                        <div className='skills'>Unit Testing</div>
                    </div>
                    </div>
                    </div>
                    <div className='my-profile-pic'>
                        <img className='pro-image' src="./images/vaspropic1-3-resized.webp"></img>
                        <NavLink to="/contact"><button className='btn'>Get In Touch</button></NavLink>
                    </div>
                </div>
                
            </div>
        </section>
    )
}