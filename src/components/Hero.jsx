import heroImage from '../images/hero.jpg';

function Hero(){
    return (
        <>
            <div className="homehero">
                <p className="home-p">You've Landed in the <br /> Mind-Space of <br /> <a><span className="box-link">Andrew Yturaldi</span></a></p>
                <img src={heroImage} className="hero-image" width="100%" height="100%"/>
            </div>
        </>
    )
}

export default Hero;