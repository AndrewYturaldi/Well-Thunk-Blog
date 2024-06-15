import emailImage from "../images/emailImage.svg";

function Footer(){
    return (
        <>
            <footer>
                <div>
                    <p className="logo-text">Well Thunk.</p>
                </div>
                <div className="footer-navbar">
                    <div>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/articles">Articles</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="email-div">
                    <div>
                        <a href="mailto:wellthunk@yturaldi.com">
                            <img src={emailImage} />
                            <p className="email-text">wellthunk@yturaldi.com</p>
                        </a>
                    </div>
                </div>
                <div>
                    <p className="copyright-text">&copy; Copyright 2024 Well Thunk.</p>
                </div>
                <div>
                    <p className="website-text">website by Andrew Yturaldi</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;