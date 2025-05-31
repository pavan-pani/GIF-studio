import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { MdDarkMode } from 'react-icons/md';

function Navbar() {
  const { toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h1 className="logo">GIF Studios</h1>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        <button className="theme-toggle" onClick={toggleTheme}>
          <MdDarkMode />
        </button>

        <button className="cta-button" onClick={closeMenu}>
          Book Call
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
