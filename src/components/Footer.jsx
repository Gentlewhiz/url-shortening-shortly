import logo from "../assets/images/logo.svg";
import { FOOTER_LINK_GROUPS, SOCIAL_LINKS } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-16 text-center md:text-left">
      <div className="mx-auto flex max-w-content flex-col items-center gap-12 px-6 md:flex-row md:items-start md:justify-between md:px-8">
        <img src={logo} alt="Shortly" className="h-8 brightness-0 invert" />

        <nav
          aria-label="Footer"
          className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:gap-16"
        >
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="font-bold text-white">{group.heading}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-blue-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <ul className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="inline-block transition hover:opacity-70"
              >
                <img src={social.icon} alt="" className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
