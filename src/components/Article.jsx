function Article({ section, src, alt, articleTitle, date }) {
    return (
        <>
            <p>{section}</p>
            <img src={src} alt={alt}/>
            <h3>{articleTitle}</h3>
            <p>{date}</p>
        </>
    );
}

export default Article;