function ProjectCard(props) {

    return (
        <div>
            {props.projects.map((project) =>
                <div key={project.id}>
                    <p>{project.name}</p>
                    <p>{project.description}</p>
                    <p>{project.deploy}</p>
                    <p>{project.repo}</p>
                    <img src={require(`../../assets/${project.name}.png`)} alt="meow" />
                </div>
            )}
        </div>
    )
}
//                    
export default ProjectCard;