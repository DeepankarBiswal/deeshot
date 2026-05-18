const navLinks = ["About", "Link", "Contact"];
type NavbarProps = {
  activePage: string;
  onNavigate: (page: string) => void;
};

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  return (
    <nav className="bg-white px-8 py-4 border-b border-gray-100">
      {/* Logo */}
      <p className="text-sm tracking-[0.25em] font-light mb-3 text-left">DeeSHOT</p>

      {/* Nav links */}
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link}>
            <button
              onClick={() => onNavigate(link)}
              className={`text-sm tracking-wide transition-all duration-200 bg-transparent border-none cursor-pointer
                ${
                  activePage === link
                    ? "border-b border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}