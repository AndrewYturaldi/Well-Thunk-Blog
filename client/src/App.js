import './dist/styles.css';
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/About" element={<About />} />
        <Route index path="/Contact" element={<Contact />} />
        <Route index path="/Articles" element={<Articles />} />
        <Route index path="/ArticlePage" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
