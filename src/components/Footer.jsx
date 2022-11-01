import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'
import bigLogo from './../Assets/Images/big-logo.png'
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="left-footer">
                    <img src={bigLogo} alt="Logo" />
                </div>
                <div className="right-footer">
                    <div className="left-links">
                        <p>Quick Links</p>
                        <Link to="/" className="footer-link">Work</Link>
                        <Link to="/" className="footer-link">About</Link>
                        <Link to="/" className="footer-link">Let's Talk</Link>
                    </div>
                    <div className="right-links" footer->
                        <p>Say Hello</p>
                        <Link to="/" className="footer-link">admin@example.com</Link>
                        <Link to="/" className="footer-link">hr@example.com</Link>
                        <Link to="/" className="footer-link">Let's Talk</Link>
                        <div className='font-container'>
                            <div className='col symbol-style'>
                                <FontAwesomeIcon icon={faSignIn} />


                            </div>
                            <div className='col symbol-style'>
                                <FontAwesomeIcon icon={faHandHoldingDollar} />

                            </div>
                            <div className='col symbol-style'>
                                <FontAwesomeIcon icon={faCoins} />

                            </div>
                            <div className='col symbol-style'>
                                <FontAwesomeIcon icon={faStarAndCrescent} />

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer