import { Link } from "react-router-dom";
import { useState } from "react";
import sideBar from "../images/yellowSidebar.svg"

function Navbar(){
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };


    return (
        <>
            <nav className="nav">
                <div className="header">
                    <a href="/" className="site-name">Well <span className="break">Thunk.</span></a>
                    <a><img className="sidebar" src={sideBar} width="40" height="40"></img></a>
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

                <ul className="mobile-navbar">
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
                    <li>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;