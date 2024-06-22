import { Link } from "react-router-dom";
import { useState } from "react";
import sideBarWhite from "../images/whiteSidebar.svg";
import sideBarYellow from "../images/yellowSidebar.svg";
import xIconWhite from "../images/whiteX.svg";
import xIconYellow from "../images/yellowX.svg";

function Navbar(){
    const [nav, setNav] = useState(false);
    const [navMobile, setNavMobile] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };

    //Seperate function so mobile navigation and regular navigation links don't interfere with each other
    const openNavMobile = () => {
        window.scrollTo(0, 0);
        setNavMobile(!navMobile);
    };


    return (
        <>
            <nav className="nav">
                <div className="header">
                    <a href="/" className="site-name"><p>Well <span className="break">Thunk.</span></p></a>
                    <div className="sidebar">
                        <a><img className="sidebarYellow" src={sideBarYellow} width="30" height="30"></img></a>
                        <Link onClick={openNavMobile}>
                            <a><img className="sidebarWhite" src={sideBarWhite} width="30" height="30"></img></a>
                        </Link>
                    </div>
                </div>
                <div className="navbar">
                    <div>
                        <ul>
                            <li>
                                <Link onClick={openNav} to="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={openNav} to="/About">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={openNav} to="/Contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={openNav} to="/Articles">
                                    <a>Articles</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*mobile*/}

                <ul className={`mobile-navbar ${navMobile ? "open-nav" : ""}`}>
                    <li>
                        <a className="xIcon-link-white"><img className="xIconWhite" src={xIconWhite} width="40" height="40" /></a>
                        <Link onClick={openNavMobile}>
                            <a className="xIcon-link-yellow"><img className="xIconYellow" src={xIconYellow} width="40" height="40" /></a>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNavMobile} to="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNavMobile} to="/About">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNavMobile} to="/Contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNavMobile} to="/Articles">
                            <a>Articles</a>
                        </Link>
                    </li>
                    <li>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;