import "../styles/footer.scss";
import emailImage from "../images/emailImage.svg";

function Footer(){
    return <footer>
        <div id="footer-navbar">
            <div>
                <ul>
                    <li>
                        <a href="/home">Home</a>
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
        <div id="email-div">
                    <img src={emailImage} />
                    <p id="email-text">wellthunk@yturaldi.com</p>
        </div>
            <p id="logo-text">Well Thunk.</p>
            <p id="copyright-text">&copy; Copyright 2024 Well Thunk.</p>
    </footer>
}

export default Footer;