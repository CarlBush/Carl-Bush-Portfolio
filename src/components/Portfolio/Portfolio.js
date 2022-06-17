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
        },
        {
            id: 2,
            name: "Threat Level Midnight",
            description: "Second Project",
            deploy: "https://secret-ridge-77127.herokuapp.com/",
            repo: "https://github.com/sp381/Threat-Level-Midnight",
        },
        {
            id: 3,
            name: "1st Portfolio",
            description: "1st created portfolio",
            deploy: "https://secret-ridge-77127.herokuapp.com/",
            repo: "https://carlbush.github.io/Portfolio/",
        },
        {
            id: 4,
            name: "Budget Tracker",
            description: "Budget Tracker",
            deploy: "https://morning-brushlands-44528.herokuapp.com/",
            repo: "https://github.com/CarlBush/Budget-Tracker",
        },
    ]

    return (
        <div>
            <ProjectCard projects={projects}></ProjectCard>
        </div>
    )
}

export default Portfolio;