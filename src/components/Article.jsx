import { Link } from "react-router-dom";
import { useState } from "react";

function Article({ id, section, src, alt, articleTitle, date }) {
    const [nav, setNav] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <>
            <Link className="article-link" onClick={openNav} to={`/ArticlePage/${encodeURIComponent(id)}`}>
                <img className={`article-img ${imageLoaded ? 'loaded' : ''}`} src={src} alt={alt} 
                 width="100%" height="auto" onLoad={handleImageLoaded}/>
                <p className="section">{section}</p>
                <h4>{articleTitle}</h4>
                <p className="date">{date}</p>
            </Link>
        </>
    );
}

export default Article;