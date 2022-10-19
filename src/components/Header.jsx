import logo from './../Assets/Images/logo.png'
import Home from './Views/Home'
const Header = () =>{
    return(
   <div className="header">
    <div className="nav">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="menu">
            <span>Home</span>
            <span>Service</span>
            <span>About</span>
            <span>Blog</span>
        </div>
        <div className="contact">
            <button className='contact-btn'>Contact</button>
        </div>
    </div>
    <Home />
   </div>
    )
}
export default Header;