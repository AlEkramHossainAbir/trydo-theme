import React from 'react'
import aboutImage from './../../Assets/Images/about.jpg'
const About = () => {
    return (
        <div className="about-container">
            <div className="about">
                <img src={aboutImage} alt="About" className='about_image' />
                <div className="message-container">
                    <div className="about-message">
                        <h1 className='about-heading'>About</h1>
                        <p className='about-paragraph'>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                    </div>

                    <div className="who-are-container">
                        <div className="who-we-are-message">
                            <h1 className='who-we-are-heading'>Who we are</h1>
                            <p className='who-we-are-paragaraph'>There are many vtions of passages of Lorem Ipsum available, but the majority
                                have suffered.,</p>
                        </div>
                        <div className="who-we-are-message">
                            <h1 className='who-we-are-heading'>Who we are</h1>
                            <p className='who-we-are-paragaraph'>There are many vtions of passages of Lorem Ipsum available, but the majority
                                have suffered.,</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About