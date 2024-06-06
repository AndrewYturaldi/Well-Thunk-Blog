import './dist/styles.css';
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import BlogAbout from "../src/components/BlogAbout";
import Thinker from '../src/components/Thinker';
import Next from '../src/components/Next';
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogAbout />
      <Thinker />
      <Next />
      <Footer />
    </>
  );
}

export default App;
