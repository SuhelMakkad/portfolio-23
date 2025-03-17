import LinkWithUnderline from "@/components/LinkWithUnderline";
import ProjectList from "@/components/ProjectList";
import SectionHeading from "@/components/SectionHeading";

import { personalDescription, socialLinks, universityLink } from "@/utils/data";

export default function Home() {
  return (
    <>
      <section
        id="intro"
        className="my-auto flex h-[60vh] max-h-96 flex-col justify-center"
      >
        <h1 className="overflow-hidden text-ellipsis pt-6 text-7xl font-semibold uppercase sm:text-8xl">
          Suhel <br /> Makkad
        </h1>

        <p className="mt-6">{personalDescription}</p>
      </section>

      <section id="work" className="mt-20">
        <SectionHeading>Selected Work</SectionHeading>

        <ProjectList />
      </section>

      <section id="education" className="mt-20">
        <SectionHeading>Past Education</SectionHeading>

        <div className="flex flex-col gap-2">
          <span className="text-5xl">Electronics Engineering</span>
          <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            2017 - 2021
          </span>
          <span>
            Graduated from{" "}
            <LinkWithUnderline target="_blank" href={universityLink}>
              Dharmsinh Desai University
            </LinkWithUnderline>{" "}
            with 6.2 CPI
          </span>
        </div>
      </section>

      <section id="contact" className="mt-20">
        <SectionHeading>Find Me Here</SectionHeading>

        <ul className="flex flex-wrap gap-6 text-5xl capitalize">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <LinkWithUnderline target="_blank" href={link.href}>
                {link.label}
              </LinkWithUnderline>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
