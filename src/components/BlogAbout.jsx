import aBlogAbout from '../images/aBlogAbout.jpg';

function BlogAbout(){
    return (
        <>
            <div className="blog-about">
                <p><a><span className="box-link-explore">Explore Articles</span></a></p>
                <img src={aBlogAbout} width="900px" height="320px"/>
            </div>
        </>
    )
}

export default BlogAbout