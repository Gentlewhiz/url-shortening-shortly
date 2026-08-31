import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { NAV_LINKS } from "../data/content";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex max-w-content items-center justify-between px-6 py-8 md:px-8">
      <a href="/" aria-label="Shortly home">
        <img src={logo} alt="Shortly" className="h-6 md:h-8" />
      </a>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-10 md:flex">
        <nav aria-label="Primary">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="font-bold text-gray-900 transition hover:text-blue-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-8">
          <a href="#" className="font-bold text-gray-900 transition hover:text-blue-400">
            Login
          </a>
          <a
            href="#"
            className="rounded-full bg-blue-400 px-6 py-3 font-bold text-white transition hover:opacity-80"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile hamburger toggle */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      >
        {isMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="#9E9AA8"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
            <path d="M0 0h24v2H0V0zm0 8h24v2H0V8zm0 8h24v2H0v-2z" fill="#9E9AA8" />
          </svg>
        )}
      </button>

      {/* Mobile navigation overlay */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="absolute inset-x-6 top-full mt-4 rounded-lg bg-purple-950 px-8 py-8 md:hidden"
        >
          <nav aria-label="Primary">
            <ul className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="font-bold text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <hr className="my-6 border-t border-white/20" />
          <div className="flex flex-col items-center gap-6">
            <a href="#" className="font-bold text-white">
              Login
            </a>
            <a
              href="#"
              className="w-full rounded-full bg-blue-400 py-3 text-center font-bold text-white transition hover:opacity-80"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
