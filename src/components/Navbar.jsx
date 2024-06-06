function Navbar(){
    return (
        <>
            <nav className="nav">
                <div className="header">
                    <a href="/" className="site-name">Well Thunk.</a>
                </div>
                <div className="navbar">
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
        </>
    )
}

export default Navbar;