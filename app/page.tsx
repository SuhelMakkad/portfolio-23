import LinkWithUnderline from "@/components/LinkWithUnderline";
import ProjectList from "@/components/ProjectList";

import { socialLinks } from "@/utils/data";

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

        <p className="mt-6">
          Frontend engineer with over a 2 years of experience building nice
          things for good people.
        </p>
      </section>

      <section id="work" className="mt-20">
        <h2 className="text-end text-4xl font-medium capitalize text-black duration-300 dark:text-white">
          Selected Work
        </h2>

        <div className="mt-12">
          <ProjectList />
        </div>
      </section>

      <section id="contact" className="mt-20">
        <h2 className="text-4xl font-medium capitalize text-black duration-300 dark:text-white">
          Find Me Here
        </h2>

        <ul className="mt-8 flex flex-wrap justify-end gap-6 text-5xl capitalize">
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
