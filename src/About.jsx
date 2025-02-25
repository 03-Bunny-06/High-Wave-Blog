function About(){
    return(
        <div className="about-div">
            <div className="about-content">
                <h1 className="about-div-heading">Elevate Your Knowledge,<br/> One Wave at a Time</h1>
                <p className="about-div-paragraph">High Wave is your go-to destination for insightful blogs on technology, design, trends, 
                   and creativity. We bring you thought-provoking content that keeps you informed, inspired, 
                   and ahead of the curve. Ride the wave of knowledge with us!
                </p>
                <button className="subscribe-btn">Subscribe</button>
            </div>
            <div>
                <img className="about-img" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="about-image"/>
            </div>
        </div>
    )
}

export default About