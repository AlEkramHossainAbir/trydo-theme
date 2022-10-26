import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import About from "./About";
import FunFact from "./FunFact";
import Home from "./Home";
import PartnerImages from "./partner/PartnerImages";
import Services from "./services/Services";
const Homepage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
            <Navbar />
            <Home />
            <About />
            <Services />
            <FunFact />
            <PartnerImages />
            <Footer />
        </div>
    )
}
export default Homepage