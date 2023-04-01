import Heading from "@/components/Heading";
import ProjectList from "@/components/ProjectList";

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

      <section className="mt-32">
        <Heading tag="h2" capitalized dir="end">
          Selected Work
        </Heading>

        <div className="mt-12">
          <ProjectList />
        </div>
      </section>

      <section className="mt-32">
        <Heading tag="h2" capitalized>
          Find Me Here
        </Heading>

        <div className="mt-12">
          <ProjectList />
        </div>
      </section>
    </>
  );
}
