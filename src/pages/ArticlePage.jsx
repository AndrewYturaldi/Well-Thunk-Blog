import Footer from "../components/Footer";
import TopScroller from "../components/TopScroller";
import CheckoutArticles from "../components/CheckoutArticles"
import { useParams } from "react-router-dom";
import blogData from '../blogData';
import DOMPurify from 'dompurify';

function ArticlePage() {
    let { articleId } = useParams();

    // Convert articleId to a number
    const id = parseInt(articleId, 10);

     // Find the articleData from blogData based on articleTitle
     const articleData = blogData.find(article => article.id === id);

     // If articleData is not found, handle gracefully (optional)
     if (!articleData) {
         return <div>Article not found</div>;
     }

    // Sanitize HTML content using DOMPurify
    const sanitizedContent = DOMPurify.sanitize(articleData.content);

    return (
        <>
            <div className="article-page">
                <div className="article-page-container">
                    <p className="article-page-section">{articleData.section}</p>
                    <h2 className="article-page-title">{articleData.title}</h2>
                    <p className="article-page-info">Author: {articleData.author} &nbsp; <span className="stay-together">Date: {articleData.date}</span></p>
                    <img className="article-page-img" src={articleData.coverPhotoFull} alt={articleData.alt} width="1236" height="696"/>
                    {/* Render sanitized HTML content using dangerouslySetInnerHTML */}
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: sanitizedContent }}/>
                    {/* Additional content and components for the ArticlePage */}
                </div>
            </div>
            <CheckoutArticles />
            <TopScroller />
            <Footer />
        </>
    );
}

export default ArticlePage;
