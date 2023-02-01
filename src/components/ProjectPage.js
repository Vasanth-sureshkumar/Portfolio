import React from 'react'
import CardComponent from './CardComponent'
export default function ProjectPage() {
    let projects ={
        ems: {
            title: 'Employee Management System',
            desc: 'An application which manages the employees information. It displays the employee information and enables user to add, delete and edit a particular employee info',
            skills: 'html, css, javascript',
            proj_image: './images/EMSImage.png',
            liveLink: 'https://vasanth-sureshkumar.github.io/Employee-Management-System/',
            sourceCode: 'https://github.com/Vasanth-sureshkumar/Employee-Management-System'
        },
        linkedin: {
            title: 'LinkedIn Clone',
            desc: 'A clone of linkedin developed using reactjs. Used firebase for authentication. Currently it has a feature to post the user messages. ',
            skills: 'html, css, javascript, reactjs, redux-toolkit, firebase',
            proj_image: './images/EMSImage.png',
            liveLink: 'https://vasanth-sureshkumar.github.io/Employee-Management-System/',
            sourceCode: 'https://github.com/Vasanth-sureshkumar/Employee-Management-System'
        },
        diceGame: {
            title: 'Tenzies Dice Game',
            desc: 'Its a dice rolling and matching game developed using reactjs',
            skills: 'html, css, reactjs',
            proj_image: './images/tenziesImage.png',
            liveLink: 'https://vasanth-sureshkumar.github.io/Tenzies-Dice-Game/',
            sourceCode: 'https://github.com/Vasanth-sureshkumar/Tenzies-Dice-Game'
        }
    }
    return (
        <>
        <section className='card-section'>
            <h2>My Projects</h2>
            <div className='card-component'>
            <CardComponent projInfo={projects.ems}></CardComponent>
            {/* <CardComponent projInfo={projects.linkedin}></CardComponent> */}
            <CardComponent projInfo={projects.diceGame}></CardComponent>
            {/* <CardComponent></CardComponent> */}
            </div>
        </section>
        
        </>
    )
}