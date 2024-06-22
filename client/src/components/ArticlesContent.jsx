import searchIcon from '../images/searchIcon.jpg';
import Article from '../components/Article';
import blogData from '../blogData';

function ArticlesContent(){
    return (
        <>
            <div className="articles-content">
                <div className="articles-container">
                    <div className="topics-section">
                        <form>
                            <input placeholder="Search Articles" type="text"></input>
                            <button className="search-button"><img src={searchIcon} width="42" height="34"/></button>
                        </form>
                        <div className="button-grid">
                            <button className="topic-button">All</button>
                            <button className="topic-button">Music</button>
                            <button className="topic-button">Math</button>
                            <button className="topic-button">Nature</button>
                            <button className="topic-button">Thoughts</button>
                            <button className="topic-button">Other</button>
                            <button className="topic-button">Random</button>
                        </div>
                    </div>
                    <div className="article-list">
                    {blogData.map((post) => {
                                    return (
                                <Article
                                    key={post.id}
                                    section={post.section}
                                    src={post.coverPhoto}
                                    alt={`${post.title} Cover`}
                                    articleTitle={post.title}
                                    date={post.date}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticlesContent;