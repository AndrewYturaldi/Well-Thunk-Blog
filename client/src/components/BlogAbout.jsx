import { Link } from "react-router-dom";
import { useState } from "react";
import aBlogAbout from '../images/aBlogAbout.jpg';

function BlogAbout(){
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };

    return (
        <>
            <div className="blog-about">
                <p>
                    <Link onClick={openNav} to="/Articles">
                        <a><span className="box-link-explore">Explore Articles</span></a>
                    </Link>
                </p>
                <img src={aBlogAbout} width="900px" height="320px"/>
            </div>
        </>
    )
}

export default BlogAbout