import { Link } from "react-router-dom";
import { useState } from "react";

function Next() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };

    return (
        <>
            <div className="next-div">
                <div className="next-content">
                    <h2>Where to Next?</h2>
                    <div className="card-section">
                    <div className="next-card">
                            <Link onClick={openNav} to="/Articles">
                                <a><p>Check Out <br /> Articles </p></a>
                            </Link>
                        </div>
                        <div className="next-card">
                            <Link onClick={openNav} to="/About">
                                <a><p>Learn <br /> More</p></a>
                            </Link>
                        </div>
                        <div className="next-card">
                            <Link onClick={openNav} to="/Contact">
                                <a><p>Contact Me</p></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Next;