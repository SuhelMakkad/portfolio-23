import Heading from "@/components/Heading";
import LinkWithUnderline from "@/components/LinkWithUnderline";
import ProjectList from "@/components/ProjectList";

import { socialLinks } from "@/utils/data";

export default function Home() {
  return (
    <>
      <section className="mt-20">
        <Heading tag="h1" uppercase>
          Suhel <br /> Makkad
        </Heading>

        <p className="mt-4">
          Frontend engineer with over a 2 years of experience building nice
          things for good people.
        </p>
      </section>

      <section id="work" className="mt-32">
        <Heading tag="h2" capitalized dir="end">
          Selected Work
        </Heading>

        <div className="mt-12">
          <ProjectList />
        </div>
      </section>

      <section id="contact" className="mt-32">
        <Heading tag="h2" capitalized>
          Find Me Here
        </Heading>

        <ul className="mt-8 flex gap-4 text-5xl capitalize">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <LinkWithUnderline label={link.label} href={link.href} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
