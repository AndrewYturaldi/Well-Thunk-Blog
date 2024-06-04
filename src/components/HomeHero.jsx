import '../styles/homehero.css';
import heroImage from '../images/hero.jpg';

function HomeHero(){
    return <div id="homehero">
        <p>You've Landed in the <br /> Mind-Space of <br /> <a><span id="box-link">Andrew Yturaldi</span></a></p>
        <img src={heroImage} id="hero-image" alt="Hero Image" width="100%" height="100%"/>
    </div>
}

export default HomeHero;