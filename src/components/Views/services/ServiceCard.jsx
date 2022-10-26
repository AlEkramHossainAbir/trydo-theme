import React from 'react'
import businessLogo from './../../../Assets/Images/business.png'
const ServiceCard = ({name,message}) =>{
    return(
        <div className="service-card-view">
          <img src={businessLogo} alt="website" />
          <h1>{name}</h1>
          <p>{message}</p>
        </div>
    )
}
export default ServiceCard