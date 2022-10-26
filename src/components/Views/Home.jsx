import React from 'react'
import businessLogo from './../../Assets/Images/business.png'
import websiteLogo from './../../Assets/Images/website.png'
import marketingLogo from './../../Assets/Images/marketing.png'
const Home = () => {
    return (

        <div className="home-container">
            <div className="home">
                <div className="banner">
                    <h1 className='banner-header-text'>A DIGITAL <br /> AGENCY </h1>
                </div>
                <div className="working-sector">
                    <div className="business-strategy">
                        <img src={businessLogo} alt="business Logo" />
                        <h1>Business Strategy</h1>
                        <p className='details-para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>

                    </div>
                    <div className="web-dev">
                        <img src={websiteLogo} alt="website Logo" />
                        <h1>Website Development</h1>
                        <p className='details-para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                    <div className="marketing">
                        <img src={marketingLogo} alt="business Logo" />
                        <h1>Marketing and Reporting</h1>
                        <p className='details-para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home