import aboutImage from './../../Assets/Images/about.jpg'
const About = () => {
    return (
        <div className="about">
            <img src={aboutImage} alt="About" className='about_image'/>
            <div className="about-message">
                <h1>About</h1>
                <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour,
                    or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
            </div>

            <div className="who-we-are-message">
                <h1>Who we are</h1>
                <p>There are many vtions of passages of Lorem Ipsum available, but the majority
                    have suffered.,</p>
            </div>
            <div className="who-we-are-message">
                <h1>Who we are</h1>
                <p>There are many vtions of passages of Lorem Ipsum available, but the majority
                    have suffered.,</p>
            </div>

        </div>
    )
}
export default About