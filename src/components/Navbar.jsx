import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo with Animated Shadow */}
        <a href="#" className="flex items-center">
          <div className="relative bg-gray-900/80 p-3 rounded-lg border border-gray-700 shadow-lg transition-shadow duration-500 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.6)]">
            <h1 className="text-2xl font-bold tracking-wide text-gray-400 hover:text-white transition-colors duration-300">
              ROHIT{" "}
              <span className="text-red-500 hover:text-yellow-400">KUMAR</span>
            </h1>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium text-white">
          {["About", "Projects", "Education", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative bg-gray-900/70 px-4 py-2 rounded-lg border border-gray-700 shadow-lg transition-shadow duration-500 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.6)] hover:text-red-500"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-transparent overflow-hidden ${
          mobileMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4 text-white">
          {["About", "Projects", "Education", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
