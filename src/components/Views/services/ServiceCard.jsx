import websiteLogo from './../../../Assets/Images/website.png'
const ServiceCard = ({name,message}) =>{
    return(
        <div className="service-card-view">
          <img src={websiteLogo} alt="website" />
          <h1>{name}</h1>
          <p>{message}</p>
        </div>
    )
}
export default ServiceCard