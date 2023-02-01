import React from 'react'

export default function CardComponent(props) {
    // console.log(props)
    const {title,desc,skills,proj_image,liveLink,sourceCode} = props.projInfo;
    return (
        <>
            <div className='card-container'>
                <div className='project-image'>
                    {/* <img src='C:\Users\vasnth.sureshkumar\Desktop\examples\React1\portfolio-new\public\images\about-me-bg.jpg' /> */}
                    <img src={proj_image} alt="project-pic"></img>
                </div>
                <div className='project-details'>
                    <div className='project-info'>
                    <h3>{title}</h3>
                    <p className='project-desc'>{desc}</p>
                    </div>
                    <div className='skills-used'>
                        <h3>Skills Used</h3>
                        <p>
                        {skills}
                        </p>
                        
                        <div className='project-button'>
                        <a href={liveLink} target="_blank" className='project-btn'>Live Project</a>
                        <a href={sourceCode} target="_blank" className='project-btn'>Source Code</a>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
        </>
    )
}