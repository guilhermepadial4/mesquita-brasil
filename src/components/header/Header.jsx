import { useState } from 'react';
import Logo from '../../assets/logo.png';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src={Logo} alt="Logo Mesquita Brasil" />
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu Toggle">
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <ul>
          <li>
            <a href="#about" onClick={toggleMenu}>Sobre</a>
          </li>
          <li>
            <a href="#gallery" onClick={toggleMenu}>Galeria</a>
          </li>
          <li>
            <a href="#religion" onClick={toggleMenu}>A Religião</a>
          </li>
          <li>
            <a href="#donation" onClick={toggleMenu}>Doações</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
