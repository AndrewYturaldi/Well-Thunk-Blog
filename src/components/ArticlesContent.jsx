import searchIcon from '../images/searchIcon.jpg'

function ArticlesContent(){
    return (
        <>
            <div className="articles-content">
                <div className="articles-div">
                    <div className="topics-section">
                        <button className="topic-button">All</button>
                        <button className="topic-button">Music</button>
                        <button className="topic-button">Math</button>
                        <button className="topic-button">Nature</button>
                        <button className="topic-button">Thoughts</button>
                        <button className="topic-button">Other</button>
                        <button className="topic-button">Random</button>
                        <form>
                            <input placeholder="Search Articles" type="text"></input>
                            <button className="search-button"><img src={searchIcon} width="42" height="36"/></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticlesContent;