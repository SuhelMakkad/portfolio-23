import LinkWithUnderline from "@/components/LinkWithUnderline";
import ProjectSummary from "./ProjectSummary";

import { projects, githubLink } from "@/utils/data";

const ProjectList = () => {
  return (
    <ul className="flex flex-col gap-12">
      {projects.map((project) => (
        <ProjectSummary key={project.title} {...project} />
      ))}

      <li className="text-start">
        <LinkWithUnderline href={githubLink}>and more...</LinkWithUnderline>
      </li>
    </ul>
  );
};

export default ProjectList;
