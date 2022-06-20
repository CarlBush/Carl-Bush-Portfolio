//import photoPlaceHolder from "../assets/placeholder_photo.png"
import avatar from "../assets/avatar.png"

function About() {
    return (
        <div>
            <br></br>
            <p>Hi! I'm <span>Carl</span> and i'm an aspiring <strong>Web Developer</strong>!</p>
            <p>I'm currently enrolled at The University of Arizona's fullstack bootcamp program.</p>
            <img src={avatar} alt="Carl Bush"></img>
        </div>
    )
}

export default About;