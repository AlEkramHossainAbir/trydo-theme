import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header">
                <h1 className="header-title">{props.title} </h1>
                <div className="header-nav">
                    <Link to = "/" className="link">Home</Link>
                    <div className="link">/</div>
                    <div className="self-title"> {props.title}</div>
                </div>
            </div>

        </div>
    )
}
export default Header