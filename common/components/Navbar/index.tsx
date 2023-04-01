import CurrentTime from "@/components/CurrentTime";
import LinkWithUnderline from "@/components/LinkWithUnderline";

const Navbar = () => {
  const links = [
    {
      label: "Work",
      href: "/#work",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ];

  return (
    <nav className="flex justify-between py-6">
      <div className="flex items-center gap-2">
        <span className="block h-2 w-2 shrink-0 rounded-full bg-black dark:bg-white" />
        <span className="uppercase">
          Gujarat, India{" "}
          <span className="max-sm:hidden">
            <CurrentTime />
          </span>
        </span>
      </div>

      <ul className="flex gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <LinkWithUnderline href={link.href}>{link.label}</LinkWithUnderline>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
