import ProjectSummary from "./ProjectSummary";
import { projects } from "./data";

const ProjectList = () => {
  return (
    <ul className="flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectSummary key={project.title} {...project} />
      ))}
    </ul>
  );
};

export default ProjectList;
