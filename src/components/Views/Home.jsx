import React from 'react'
import businessLogo from './../../Assets/Images/business.png'
import websiteLogo from './../../Assets/Images/website.png'
import marketingLogo from './../../Assets/Images/marketing.png'
const Home = () => {
    return (
        <div className="home">
            <div className="banner"> <h1>A DIGITAL <br /> AGENCY </h1></div>
            <div className="working-sector">
                <div className="business-strategy">
                    <img src={businessLogo} alt="business Logo" />
                    <h1 className='test'>Business Logo</h1>
                    <p>Lorem ipsum</p>

                </div>
                <div className="web-dev">
                    <img src={websiteLogo} alt="website Logo" />
                    <h1>Business Logo</h1>
                    <p>Lorem ipsum</p>
                </div>
                <div className="marketing">
                    <img src={marketingLogo} alt="business Logo" />
                    <h1>Business Logo</h1>
                    <p>Lorem ipsum</p>
                </div>
            </div>

        </div>
    )
}
export default Home