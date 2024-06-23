import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Hero(){
    const [goUp, setGoUp] = useState(false);
    const [nav, setNav] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
      };

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };

    useEffect(() => {
        const onPageScroll = () => {
          if (window.pageYOffset > 600) {
            setGoUp(true);
          } else {
            setGoUp(false);
          }
        };
        window.addEventListener("scroll", onPageScroll);
    
        return () => {
          window.removeEventListener("scroll", onPageScroll);
        };
      }, []);

    return (
        <>
            <div className="homehero">
                <p className="home-p">
                    You've Landed <span className="group">in the</span><br /> 
                    Mind-Space of<br />
                    <Link onClick={openNav} to="/About">
                        <a><span className="box-link">Andrew <span className="break">Yturaldi</span></span></a>
                    </Link>
                </p>
            </div>
            {/* page up */}
            <div
            onClick={scrollToTop}
            className={`scroll-up ${goUp ? "show-scroll" : ""}`}
            >
            ^
            </div>
        </>
    )
}

export default Hero;