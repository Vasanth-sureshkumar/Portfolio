import React from 'react'
import './style.css';
import {NavLink ,useLocation} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

export default function Header(props) {
    const navList = props.data;
    const history = useLocation();
    const bg = history.pathname !== "/home"  ? ( history.pathname !== "/" )?'black': '' : '';
    console.log(history)
    console.log(navList)
    const [sideBar, setSideBar] = React.useState(false)
    return (
        <>
            <header>
                <div className="header">
                    <div className="header-container" style={{background:bg}}>
                        <div className="logo-container">
                            <div className="h-logo">
                                <img className="logo-image" src="images/vaspropic1-3-resized.webp" alt="logo" />
                            </div>
                            <span className="h-title">vasanth sureshkumar</span>
                        </div>
                        <div className="navbar">
                            <div className="navbar-collapse" onClick={() => setSideBar(!sideBar)}>
                                <img src="./images/Navbar.svg" />
                            </div>
                        </div>


                        <nav className="header-main">
                            <ul className="header-links">
                                <li><NavLink style={({isActive})=> isActive ? {color: 'red'} : {}} to='/home'>home</NavLink></li>
                                <li><NavLink style={({isActive})=> isActive ? {color: 'red'} : {}} to='/about'>about me</NavLink></li>
                                <li><NavLink style={({isActive})=> isActive ? {color: 'red'} : {}} to="/projects">projects</NavLink></li>
                                <li><NavLink style={({isActive})=> isActive ? {color: 'red'} : {}} to='/contact'>contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={sideBar ? "navbar-expand active" : "navbar-expand"}
                    onClick={() => setSideBar(!sideBar)}>
                    <ul className="navbar-list">
                        <li className="close-bar"><a href="#" ><img src="./images/navbar-close.svg" /></a></li>
                        {navList.map((item) => {
                            return (console.log(item),
                                <>
                                    <li className={item.cName}><NavLink to={`${item.path}`}>{item.title}</NavLink></li>
                                </>
                            )
                        })}

                    </ul>
                </div>
            </header>
        </>
    )
}