import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navigateHome = () => navigate("/");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <button
        className="logo"
        onClick={navigateHome}
        aria-label="Go to homepage"
      >
        GIF Studios
      </button>
      <div className="mobile-controls">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-checked={theme === "dark"}
          role="switch"
        >
          {theme === "dark" ? (
            <CiLight size={24} title="Switch to light mode" />
          ) : (
            <MdDarkMode size={24} title="Switch to dark mode" />
          )}
        </button>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" title="Go to Home" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/services" title="See our Services" onClick={closeMenu}>
          Services
        </NavLink>
        <NavLink to="/contact" title="Contact us" onClick={closeMenu}>
          Contact
        </NavLink>
        <button
          type="button"
          className="theme-toggle hide-mobile"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-checked={theme === "dark"}
          role="switch"
        >
          {theme === "dark" ? (
            <CiLight size={24} title="Switch to light mode" />
          ) : (
            <MdDarkMode size={24} title="Switch to dark mode" />
          )}
        </button>
        <button
          className="cta-button"
          title="Book a call with us"
          onClick={closeMenu}
          role="button"
        >
          Book Call
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
