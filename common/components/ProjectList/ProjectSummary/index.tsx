import Link from "next/link";
import { IoOpenOutline } from "@/components/Icons";

import { Project } from "../data";
import Chip from "../Chip";

const ProjectSummary = (props: Project) => {
  const { title, subTitle, description, links, usedTechs } = props;

  return (
    <li>
      <Link href={links.live} target="_blank">
        <header className="mb-2 flex gap-2 text-5xl">
          <h4>{title}</h4> - <h6>{subTitle}</h6>
          <IoOpenOutline />
        </header>
      </Link>

      <ul className="mb-2 flex gap-3 text-sm text-zinc-800 dark:text-zinc-200">
        {usedTechs.map((usedTech) => (
          <li key={usedTech.label}>
            <Chip {...usedTech} />
          </li>
        ))}
      </ul>

      <p>{description}</p>
    </li>
  );
};

export default ProjectSummary;
