import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import About from "./About";
import FunFact from "./FunFact";
import Home from "./Home";
import PartnerImages from "./partner/PartnerImages";
import Services from "./services/Services";
const Homepage = () =>{
    return(
        <div className="homepage">
            <Navbar />
            <div className="banner-container">
                <Home />
            </div>
            <div className="about-container">
                <About />
            </div>
            <div className="service-container">
                <Services />
            </div>
            <div className="fun-fact-container">
                <FunFact />
            </div>
            <div className="partner-images-container">
                <PartnerImages />
            </div>
            <Footer />
        </div>
    )
}
export default Homepage