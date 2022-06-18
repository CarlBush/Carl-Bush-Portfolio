function Footer() {
    return (
        <footer>
            ___________________FOOOTER___________________
            GitHub URL and Icon
            <div>
                <a href="https://github.com/CarlBush" rel="noreferrer" target="_blank">
                    <img src={require(`../assets/Octocat.jpg`)} alt="github" width="50" height="50" />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                    <img src={require(`../assets/Twitter.png`)} alt="twitter" width="50" height="50" />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                    <img src={require(`../assets/LinkedIn.png`)} alt="LinkedIn" width="50" height="50" />
                </a>
            </div>
            Linkin URL and Icon
            Twitter URL and Icon
        </footer>
    )
}

export default Footer;