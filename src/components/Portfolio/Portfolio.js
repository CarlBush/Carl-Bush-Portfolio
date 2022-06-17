import ProjectCard from "./ProjectCard";
//import Dinero from "../../assets/Dinero.png"
function Portfolio() {


    const projects = [
        {
            id: 1,
            name: "Dinero",
            description: "First Project",
            deploy: "https://defhook.github.io/dinero/",
            repo: "https://github.com/defhook/dinero",
            image: "../../assets/Dinero.png"
        },
        {
            id: 2,
            name: "Threat Level Midnight",
            description: "Second Project",
            deploy: "https://secret-ridge-77127.herokuapp.com/",
            repo: "https://github.com/sp381/Threat-Level-Midnight",
            image: "/../assets/TLMN_1.png"
        }
    ]

    return (
        <div>
            <ProjectCard projects={projects}></ProjectCard>
        </div>
    )
}

export default Portfolio;