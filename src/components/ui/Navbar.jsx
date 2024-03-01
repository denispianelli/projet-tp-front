import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

export default function Navbar() {
  const isOpen = useSelector((state) => state.menu.isOpen);

  const isOpenNavClassName = isOpen ? 'navbar navbar--visible' : 'navbar';

  return (
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
  );
}
