import projects from "../../Data/projects";
import ProjectCard from "../../components/ProjectCards/ProjectCard";
import './styles.css'
import { Element } from "react-scroll";

export default function ProjectSection() {
  return (
    <Element name="Projects">
      <div className="projectsSection">
        {projects.map((project, index) => {
          console.log(project.index);
          return (
            <div key={index}>
              <ProjectCard
                projectTitle={project.projectTitle}
                AppType={project.AppType}
                stack={project.stack}
                projectDescription={project.projectDescription}
                Pindex={project.index}
                githubLink={project.githublink}
                siteLink={project.siteLink}
                displayImage={project.displayImage}
              />
              {project.index < projects.length && <hr />}
            </div>

          );
        })}
      </div>
    </Element>

  );
}
