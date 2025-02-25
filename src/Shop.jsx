function Shop(){
    return(
        <div className="shop-div">
            <div className="shop-main-div">
                <h1 className="shop-div-heading">Gear Up for Creativity & Innovation</h1>
                <p className="shop-div-paragraph1">Explore exclusive digital products, resources, and merchandise inspired by the High Wave blog. <br/></p>
                <p className="shop-div-paragraph2">From eBooks to design assets, we’ve got everything to fuel your creativity and knowledge.</p>
                <div className="shop-items-div">
                    <div>
                        <img className="shop-item-image" src="https://images.pexels.com/photos/3060654/pexels-photo-3060654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="ebooks-image" />
                        <h3>eBooks & Guides</h3>
                    </div>
                    <div>
                        <img className="shop-item-image" src="https://images.pexels.com/photos/7598019/pexels-photo-7598019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="templates-image" />
                        <h3>Digital Templates</h3>
                    </div>
                    <div>
                        <img className="shop-item-image" src="https://images.pexels.com/photos/6517274/pexels-photo-6517274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="courses-image" />
                        <h3>Online Courses & Webinars</h3>
                    </div>
                    <div>
                        <img className="shop-item-image" src="https://images.pexels.com/photos/5054208/pexels-photo-5054208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="content-image" />
                        <h3>Custom Content Services</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop