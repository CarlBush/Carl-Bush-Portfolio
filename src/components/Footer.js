function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <h5>Carl Bush</h5>
                <ul className="icons">
                    <div>
                        <li>
                            <a href="https://github.com/CarlBush" rel="noreferrer" target="_blank">
                                <img src={require(`../assets/Octocat.jpg`)} alt="github" width="50" height="50" />
                            </a>
                        </li>
                    </div>
                    <div>
                        <li>
                            <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                                <img src={require(`../assets/Twitter.png`)} alt="twitter" width="50" height="50" />
                            </a>
                        </li>
                    </div>
                    <div>
                        <li>
                            <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                                <img src={require(`../assets/LinkedIn.png`)} alt="LinkedIn" width="50" height="50" />
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;