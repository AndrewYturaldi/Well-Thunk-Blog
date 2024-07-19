import { Link } from "react-router-dom";
import { useState } from "react";

function Article({ id, section, src, alt, articleTitle, date }) {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        window.scrollTo(0, 0);
        setNav(!nav);
    };

    return (
        <>
            <Link className="article-link" onClick={openNav} to={`/ArticlePage/${encodeURIComponent(id)}`}>
                <img className="article-img" src={src} alt={alt}/>
                <p className="section">{section}</p>
                <h4>{articleTitle}</h4>
                <p className="date">{date}</p>
            </Link>
        </>
    );
}

export default Article;