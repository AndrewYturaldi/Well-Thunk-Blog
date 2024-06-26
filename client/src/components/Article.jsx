function ArticleCard({ section, src, alt, articleTitle, date }) {
    return (
        <>
            <div className="article">
                <img className="article-img" src={src} alt={alt}/>
                <p className="section">{section}</p>
                <h4>{articleTitle}</h4>
                <p className="date">{date}</p>
            </div>
        </>
    );
}

export default ArticleCard;