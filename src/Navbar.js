export default function Navbar(){
    return <nav className="nav">
        <div>
            <a href="/" className="site-name">Well Thunk.</a>
        </div>
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
    </nav>
}