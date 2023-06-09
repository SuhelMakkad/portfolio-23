import { IoOpenOutline, IoLogoGithub } from "@/components/Icons";
import LinkWithUnderline from "@/components/LinkWithUnderline";

import { Project } from "../../../utils/data";

const ProjectSummary = (props: Project) => {
  const { title, subTitle, description, links, usedTechs } = props;

  return (
    <li>
      <header
        className="mb-2 flex items-center justify-between gap-2"
        title={subTitle}
      >
        <LinkWithUnderline href={links.live} target="_blank">
          <div className="flex gap-2 text-5xl">
            <h4>{title}</h4>
            <IoOpenOutline />
          </div>
        </LinkWithUnderline>
      </header>

      <ul className="mb-2 flex flex-wrap items-center gap-3 whitespace-nowrap text-sm font-semibold text-zinc-800 dark:text-zinc-200">
        <li>
          <LinkWithUnderline target="_blank" href={links.github}>
            <span className="flex items-center gap-1 leading-none duration-300">
              <IoLogoGithub className="text-lg" />
              <span>GitHub Repo</span>
            </span>
          </LinkWithUnderline>
        </li>
        {usedTechs.map((usedTech) => (
          <li key={usedTech.label}>
            <LinkWithUnderline target="_blank" href={usedTech.href}>
              <span className="duration-300">{usedTech.label}</span>
            </LinkWithUnderline>
          </li>
        ))}
      </ul>

      <p>{description}</p>
    </li>
  );
};

export default ProjectSummary;
