import AndrewPhoto from '../images/AndrewYturaldi.jpg';

function AboutContent(){
    return (
        <>
            <div className="about-content">
                <div className='about-content-flex'>
                    <div>
                        <img src={AndrewPhoto} width="342" height="350"/>
                    </div>
                    <div>
                        <h2>Andrew Yturaldi</h2>
                        <p> 
                            Hi There! <br /><br />
                            My name is Andrew /*ee-tur-all-dee*/, and I am a 21 year-old follower of Jesus Christ. 
                            <span className="red-text"> Whether you already have a relationship with God or you are unsure, I highly encourage 
                            you to <span>seek</span> Him today! God wants to be close with you! &#123;Jeremiah 29:13&#125;</span> I enjoy music, 
                            conversation, thinking, nature, breakfast, and so much more! I&#39;ve been playing guitar since I was 13, and I 
                            dabble in bass and drums &#40;I really, really like drums!&#41;. I listen to a variety of music, and usually tell people 
                            I enjoy rock, jazz, and blues the most. I am also a long-distance runner. I&#39;m no pro-athlete, but I try to 
                            take care of the body I&#39;ve been given! My favorite color is blue, I have 9 siblings, and I study computer science. 
                            Thank you for taking the time to get to know me a bit!
                        </p>
                    </div>
                </div>
                <div>
                    <h2>The Blog</h2>
                    <p>
                        Now, you may be wondering why I decided to make this blog site! <br /><br />
                        I have had a growing desire to express the many thoughts I think in the form of a blog site, and as a student web developer, 
                        I figured I might as well build one myself! The title, <span className="thunk-box">Well Thunk</span>,was an alternate way of saying “well thought” which I thought 
                        sounded good for the blog name. This blog serves as a space where I can share thoughts, ideas, and anything interesting I find or 
                        learn that I want other people to know about! It is my hope that you, the reader, gain as much joy out of each post as I do!
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutContent;