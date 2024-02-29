import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import Dropdown from '../components/ui/Dropdown';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const isOpenNavClassName = isOpen ? 'navbar navbar--visible' : 'navbar';

  const isToggledBurgerClassName = isOpen
    ? 'burger-menu burger-menu--toggled'
    : 'burger-menu';

  return (
    <header className="header">
      <button
        type="button"
        className={isToggledBurgerClassName}
        onClick={toggleMenu}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleMenu();
          }
        }}
        aria-label="Toggle Menu"
      >
        <span className="burger-bar" />
        <span className="burger-bar" />
        <span className="burger-bar" />
      </button>

      <h1 className="header__title">
        <Link to="/">o&apos;survivors</Link>
      </h1>

      <nav className={isOpenNavClassName}>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link className="navbar__link" to="/">
              Accueil
            </Link>
          </li>
          <li className="navbar__item">
            <Dropdown />
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/lore">
              Lore
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/a-propos">
              À propos
            </Link>
          </li>
        </ul>
      </nav>

      <div className="account-container">
        <Link className="link" to="/connexion">
          <FaRegCircleUser className="account-icon" />
        </Link>
        <button className="button" type="button">
          <Link className="link" to="/connexion">
            Connexion
          </Link>
        </button>
      </div>
    </header>
  );
}
