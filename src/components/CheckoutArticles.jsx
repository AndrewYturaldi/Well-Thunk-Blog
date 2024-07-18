import { Link } from "react-router-dom";
import { useState } from "react";
import oldArrow from "../images/oldArrow.png";

function CheckoutArticles() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };

    return (
        <>
            <Link className="checkout-articles-link" onClick={openNav} to="/Articles">
                <div className="checkout-articles">
                    <div className="checkout-articles-content">
                        <p>Explore the Blog <span className="stay-together">Articles Page</span></p>
                        <img src={oldArrow} width="140" height="22" alt="Right Arrow" />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CheckoutArticles;