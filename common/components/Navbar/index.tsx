import CurrentTime from "@/components/CurrentTime";
import LinkWithUnderline from "@/components/LinkWithUnderline";
import ThemeSwitch from "../ThemeSwitch";

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
    <nav className="flex items-start justify-between py-6  sm:items-center">
      <div className="flex items-center gap-2">
        <span className="block h-2 w-2 shrink-0 rounded-full bg-black dark:bg-white" />
        <span className="uppercase">
          <span className="max-sm:hidden">Gujarat,</span> India{" "}
          <span className="animate-fade-in">
            <CurrentTime />
          </span>
        </span>
      </div>

      <div className="flex items-start gap-2 sm:items-center">
        <ThemeSwitch />

        <ul className="flex flex-col gap-4 text-end sm:flex-row">
          {links.map((link, index) => (
            <li key={index}>
              <LinkWithUnderline href={link.href}>
                {link.label}
              </LinkWithUnderline>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
