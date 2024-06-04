import '../styles/blogabout.css';
import aBlogAbout from '../images/aBlogAbout.jpg'

function BlogAbout(){
    return <div id="blog-about">
        <p><a><span id="box-link-explore">Explore Articles</span></a></p>
        <img src={aBlogAbout} width="900px" height="320px"/>
    </div>
}

export default BlogAbout