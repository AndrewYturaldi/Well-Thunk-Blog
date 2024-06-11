import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from '../images/hero.jpg';

function Hero(){
    const [nav, setNav] = useState(false);

    const openNav = () => {
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
                <img src={heroImage} className="hero-image" width="100%" height="100%"/>
            </div>
        </>
    )
}

export default Hero;