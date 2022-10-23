import React from "react"
import { Link } from   "react-router-dom";
import logo from './../Assets/Images/logo.png'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">Service</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/about" className="link">Blog</Link>
            </div>
            <div className="contact">
                <button className='contact-btn'>Contact</button>
            </div>
        </div>

    )
}
export default Navbar