import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-black tracking-tight text-white"
        >
          <span className="text-blue-500">AO</span>.
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative text-sm uppercase tracking-wider text-slate-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="uppercase text-slate-300 hover:text-blue-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              className="bg-blue-600 px-5 py-2 rounded-full text-white"
            >
              Hire Me
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}