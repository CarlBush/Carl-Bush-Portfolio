function Nav({handlePageChange}) {
    return (
        <nav>
            <a href="/">Carl Bush</a>
            <ul>
                <li>
                    <a href="#About" onClick={() => handlePageChange("About")}>About</a>
                </li>
                <li>
                    <a href="#Portfolio" onClick={() => handlePageChange("Portfolio")}>Portfolio</a>
                </li>
                <li>
                    <a href="#Resume" onClick={() => handlePageChange("Resume")}>Resume</a>
                </li>
                <li>
                    <a href="#Contact" onClick={() => handlePageChange("Contact")}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;