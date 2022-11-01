import React from "react"
import Header from "./Header"
import Services from "./Views/services/Services"
const ServicePage = () => {
    return (
        <div className="service-page">
            <Header title="servicepage" />
            <Services />
        </div>

    )
}
export default ServicePage