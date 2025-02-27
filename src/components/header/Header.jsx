import Logo from '../../assets/logo.png';

import './header.scss';

export function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo Mesquita Brasil" />
      <nav>
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#gallery">Galeria</a>
          </li>
          <li>
            <a href="#religion">A Religião</a>
          </li>
          <li>
            <a href="#donation">Doações</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
