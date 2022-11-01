import React from "react"
import Header from "./Header"
import About from "./Views/About"
import PartnerImages from "./Views/partner/PartnerImages"

const Aboutpage = () => {
    return (
        <div className="aboutpage-container">
            <Header title="About" />
            <About />
            <PartnerImages />
        </div>
    )
}
export default Aboutpage