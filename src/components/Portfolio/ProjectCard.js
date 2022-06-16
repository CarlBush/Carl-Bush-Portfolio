function ProjectCard(props) {

    return (
        <div>
            {props.projects.map((project) =>
                <div>
                    <p>{project.name}</p>
                    <p>{project.description}</p>
                    <p>{project.deploy}</p>
                    <p>{project.repo}</p>
                    <img src={project.image} alt={project.name}></img>
                </div>
            )}
        </div>
    )
}

export default ProjectCard;



// Budget Tracker
// https://github.com/CarlBush/Budget-Tracker
// https://github.com/CarlBush/Budget-Tracker/blob/main/media/screenshot.png
// https://morning-brushlands-44528.herokuapp.com/

// Portfolio 1
// https://github.com/CarlBush/Portfolio
// https://carlbush.github.io/Portfolio/

// Dinero
// https://github.com/defhook/dinero
// https://defhook.github.io/dinero/


// Threat Level Midnight
// https://github.com/sp381/Threat-Level-Midnight
// https://secret-ridge-77127.herokuapp.com/