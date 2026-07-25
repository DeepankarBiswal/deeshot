import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Link", path: "/link" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-white px-8 py-6 border-b border-gray-100">
      <p className="text-sm tracking-[0.25em] font-sans font-stretch-90% mb-3 text-left">DeeSHOT</p>

      <ul className="flex gap-10 text-left py-3">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-all duration-200 ${
                  isActive
                    ? "border-b border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}