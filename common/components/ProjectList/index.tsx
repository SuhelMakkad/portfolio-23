import ProjectSummary from "./ProjectSummary";
import { projects } from "../../utils/data";

const ProjectList = () => {
  return (
    <ul className="flex flex-col gap-12">
      {projects.map((project) => (
        <ProjectSummary key={project.title} {...project} />
      ))}
    </ul>
  );
};

export default ProjectList;
