import React from "react";
import Header from "./Header";
import blog1 from './../Assets/Images/blog1.jpg'
import blog2 from './../Assets/Images/blog2.jpg'
import blog3 from './../Assets/Images/blog3.jpg'
import blog4 from './../Assets/Images/blog4.jpg'
const Blogpage = () => {
    return (
        <div className="blogpage-container">
            <div className="blogpage">
                <div className="blogpage-header">
                    <Header title="Blog List" link="/blog" />
                </div>
                <div className="blogpage-images">
                    <img src={blog1} alt="blog 1 " />
                    <img src={blog2} alt="blog 2 " />
                    <img src={blog3} alt="blog 3 " />
                    <img src={blog4} alt="blog 4 " />
                    <img src={blog1} alt="blog 1 " />
                    <img src={blog2} alt="blog 2 " />
                </div>
            </div>
        </div>
    )
}
export default Blogpage