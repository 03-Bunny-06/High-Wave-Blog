function Contact(){
    return(
        <div className="contact-div">
            <div>
                <img className="contact-img" src="https://images.pexels.com/photos/7709278/pexels-photo-7709278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="about-image"/>
            </div>
            <div className="contact-content">
                <h1 className="contact-div-heading">Let’s Collaborate, <br/> Contact High Wave </h1>
                <p className="contact-div-paragraph">
                    Have questions, feedback, or collaboration ideas? We’d love to hear from you! Whether you're a reader, a fellow creator, or a brand looking to partner, reach out to us, and we’ll get back to you as soon as possible.
                </p>
                <input type="text" placeholder="Name" className="contact-div-input"/> <br/>
                <input type="email" placeholder="Work Mail" className="contact-div-input"/> <br/>
                <button className="contact-btn">Contact</button>
            </div>
        </div>
    )
}

export default Contact