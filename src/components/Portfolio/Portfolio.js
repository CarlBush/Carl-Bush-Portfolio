import ProjectCard from "./ProjectCard";
function Portfolio() {


    const projects = [
        {
            id: 7,
            name: "Lucky Duck",
            description: "Social Platform for Pet Spotting/Tracking.",
            deploy: "https://scenic-great-basin-78312.herokuapp.com/",
            repo: "https://github.com/CarlBush/Lucky-Duck",
        },
        {
            id: 1,
            name: "Dinero",
            description: "Currency exchange rate converter",
            deploy: "https://defhook.github.io/dinero/",
            repo: "https://github.com/defhook/dinero",
        },
        {
            id: 2,
            name: "Threat Midnight",
            description: "Discussion forum of movies that are currently banned.",
            deploy: "https://secret-ridge-77127.herokuapp.com/",
            repo: "https://github.com/sp381/Threat-Level-Midnight",
        },
        {
            id: 3,
            name: "1st Portfolio",
            description: "First portfolio created in HTML and CSS",
            deploy: "https://secret-ridge-77127.herokuapp.com/",
            repo: "https://carlbush.github.io/Portfolio/",
        },
        {
            id: 4,
            name: "Budget Tracker",
            description: "A Budget tracker impacted by each transaction",
            deploy: "https://morning-brushlands-44528.herokuapp.com/",
            repo: "https://github.com/CarlBush/Budget-Tracker",
        },
        {
            id: 5,
            name: "Scheduler",
            description: "Calender app for scheduling your workday.",
            deploy: "https://carlbush.github.io/work-day-scheduler/",
            repo: "https://github.com/CarlBush/work-day-scheduler",
        },
        {
            id: 6,
            name: "Note Taker",
            description: "App that allows you to CRUD notes.",
            deploy: "https://blooming-garden-14845.herokuapp.com/",
            repo: "https://github.com/CarlBush/note-taker",
        },

    ]

    return (
        <div className="portfolio-container">
            <ProjectCard projects={projects}></ProjectCard>
        </div>
    )
}

export default Portfolio;