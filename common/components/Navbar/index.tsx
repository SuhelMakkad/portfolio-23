import Link from "next/link";

import CurrentTime from "@/components/CurrentTime";

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
    <nav className="wrapper flex justify-between py-6 text-lg">
      <div className="flex items-center gap-2">
        <span className="block h-2 w-2 shrink-0 rounded-full bg-white" />
        <span className="uppercase">
          Gujarat, India{" "}
          <span className="max-sm:hidden">
            <CurrentTime />
          </span>
        </span>
      </div>

      <ul className="flex gap-4">
        {links.map((link) => (
          <li>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;