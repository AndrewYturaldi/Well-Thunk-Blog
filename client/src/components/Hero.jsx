import { Link } from "react-router-dom";
import { useState } from "react";

function Hero(){
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };

    return (
        <>
            <div className="homehero">
                <p className="home-p">
                    You've Landed in the <br /> Mind-Space of <br /> 
                    <Link onClick={openNav} to="/About">
                        <a><span className="box-link">Andrew Yturaldi</span></a>
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Hero;