import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./Views/About";
import FunFact from "./Views/FunFact";
import Home from "./Views/Home";
import PartnerImages from "./Views/partner/PartnerImages";
import Services from "./Views/services/Services";
const Homepage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
            <Home />
            <About />
            <Services />
            <FunFact />
            <PartnerImages />
        </div>
    )
}
export default Homepage