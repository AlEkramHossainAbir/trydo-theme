import React from "react"
import { Link } from   "react-router-dom";
import logo from './../Assets/Images/logo.png'
const Navbar = () => {
    return (
         <div className="navbar-container">
            <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <Link to="/" className="link">Home</Link>
                <Link to="/service" className="link">Service</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/blog" className="link">Blog</Link>
            </div>
            <div className="contact">
                <button className='contact-btn'>Contact</button>
            </div>
        </div>
         </div>
    )
}
export default Navbar