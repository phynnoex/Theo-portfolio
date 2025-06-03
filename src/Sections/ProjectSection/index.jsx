import projects from "../../Data/projects";
import ProjectCard from "../../components/ProjectCards/ProjectCard";
import './styles.css'
import { Element } from "react-scroll";

export default function ProjectSection() {
  return (
    <Element name="Projects">
      <div className="projectsSection">
        {projects.map((project) => {
          console.log(project.index);
          return (
            <ProjectCard
              key={project.index}
              projectTitle={project.projectTitle}
              AppType={project.AppType}
              stack={project.stack}
              projectDescription={project.projectDescription}
              Pindex={project.index}
              githubLink={project.githublink}
              siteLink={project.siteLink}
              displayImage={project.displayImage}
            />
          );
        })}
      </div>
      </Element>
    
  );
}
