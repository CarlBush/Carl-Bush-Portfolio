function ProjectCard(props) {

    return (
        <div className="project-container">
            {props.projects.map((project) =>
                <div className="card-container">
                    <div className="card" key={project.id}>
                        <img src={require(`../../assets/${project.name}.png`)} alt={project.name} className="card-img" />
                        <div className="card-content">
                            <h1 className="card-header">{project.name}</h1>
                            <p className="card-text">{project.description}</p>
                            <button className="card-btn"><a href={project.deploy} rel="noreferrer" target="_blank">Deployed</a></button>
                            <button className="card-btn"><a href={project.repo} rel="noreferrer" target="_blank">Repository</a></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
//                    
export default ProjectCard;