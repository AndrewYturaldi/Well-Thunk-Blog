function Article({ section, src, alt, articleTitle, date }) {
    return (
        <>
            <div className="article">
                
                <p className="section">{section}</p>
                <img className="article-img" src={src} alt={alt}/>
                <h4>{articleTitle}</h4>
                <p className="date">{date}</p>
            </div>
        </>
    );
}

export default Article;