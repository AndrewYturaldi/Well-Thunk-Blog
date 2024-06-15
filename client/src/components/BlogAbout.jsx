import { Link } from "react-router-dom";
import { useState } from "react";
import aBlogAboutLarge from '../images/aBlogAboutLarge.jpg';
import aBlogAboutMed from '../images/aBlogAboutMed.jpg';
import aBlogAboutSmall from '../images/aBlogAboutSmall.jpg';

function BlogAbout(){
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };

    return (
        <>
            <div className="blog-about">
                <img className="big-image" src={aBlogAboutLarge} width="900px" height="320px"/>
                <img className="med-image" src={aBlogAboutMed} width="650px" height="320px"/>
                <img className="small-image" src={aBlogAboutSmall} width="400px" height="400px"/>
                <p>
                    <Link onClick={openNav} to="/Articles">
                        <a><span className="box-link-explore">Explore Articles</span></a>
                    </Link>
                </p>
            </div>
        </>
    )
}

export default BlogAbout