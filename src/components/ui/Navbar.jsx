import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { closeMenu } from '../../store/slices/menuSlice';

export default function Navbar() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.menu.isOpen);

  const handleNavClick = () => {
    dispatch(closeMenu());
  };

  const isOpenNavClassName = isOpen ? 'navbar navbar--visible' : 'navbar';

  const menuItems = [
    { label: 'Guide', path: '/guide' },
    { label: 'Ennemis', path: '/enemies' },
    { label: 'Personnages', path: '/characters' },
    { label: 'Niveaux', path: '/stages' },
    // Ajouter d'autres items ici
  ];

  return (
    <nav className={isOpenNavClassName}>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/" onClick={handleNavClick}>
            Accueil
          </Link>
        </li>
        <li className="navbar__item">
          <Dropdown title="Découvrir" items={menuItems} />
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/lore" onClick={handleNavClick}>
            Lore
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/game" onClick={handleNavClick}>
            Jouer
          </Link>
        </li>
      </ul>
    </nav>
  );
}
