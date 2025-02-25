function Header(){
    return(
        <div className="top-header">
            <div className="overlay"></div>
            <nav className="navigation-bar">
                <img src="https://github.com/Kowshik-8055/Blogs-App/blob/main/blog-logo.png?raw=true" alt="main-logo" className="high-wave-logo"/>
                <div className="navbar-items">
                    <ul className="header-items">
                        <li className="header-item">Home</li>
                        <li className="header-item">About</li>
                        <li className="header-item">Shop</li>
                        <li className="header-item">Blogs</li>
                        <li className="header-item">Contact</li>
                    </ul>
                    <button className="support-btn">Support</button>
                </div>
            </nav>
            <div className="content-div">
                <h1>The Ultimate Blogging Hub </h1>
                <p>
                    Welcome to a world where stories come to life, ideas spark conversations, and knowledge flows effortlessly. 
                    Our blog is your go-to destination for insightful articles, expert tips, and thought-provoking discussions across a variety of topics. 
                    Whether you’re here for the latest trends, deep dives into fascinating subjects, or just a dose of inspiration, we’ve got something for everyone. 
                    Stay curious, keep exploring, and let’s embark on this journey of learning and discovery together! 
                </p>
                <button className="get-started-btn">Get Started</button>
            </div>
        </div>
    )
}

export default Header