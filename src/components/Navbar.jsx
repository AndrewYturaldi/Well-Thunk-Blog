import '../styles/navbar.css';

function Navbar(){
    return <nav className="nav">
        <div id="header">
            <a href="/" className="site-name">Well Thunk.</a>
        </div>
        <div id="navbar">
            <div>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/articles">Articles</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar;