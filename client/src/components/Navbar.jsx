import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(){
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };


    return (
        <>
            <nav className="nav">
                <div className="header">
                    <a href="/" className="site-name">Well Thunk.</a>
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
            </nav>
        </>
    )
}

export default Navbar;