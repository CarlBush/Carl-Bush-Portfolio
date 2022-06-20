import photoPlaceHolder from "../assets/placeholder_photo.png"

function About() {
    return (
        <div>
            <p>Aspiring Future Web Developer</p>
            <img src={photoPlaceHolder} alt="Carl Bush"></img>
            <p>I wake up every morning in a bed that’s too small, drive my to a school that’s too expensive, 
                and then I go to work to a job for which I get paid too little. 
                But on pretzel day? Well, I like pretzel day.
            </p>
        </div>
    )
}

export default About;