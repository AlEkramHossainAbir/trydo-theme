import logo from './../Assets/Images/logo.png'
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
            <button>Contact</button>
        </div>
    </div>
   </div>
    )
}
export default Header;