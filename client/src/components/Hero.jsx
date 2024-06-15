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
                    You've <span className="break">Landed</span> <span className="break">in the</span><br /> 
                    Mind-Space <span className="break">of </span><br />
                    <Link onClick={openNav} to="/About">
                        <a><span className="box-link">Andrew <span className="break">Yturaldi</span></span></a>
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Hero;