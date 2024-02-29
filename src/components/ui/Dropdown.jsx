import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((open) => !open);
  };

  const isOpenClassName = isOpen
    ? 'dropdown-content dropdown-content--toggled'
    : 'dropdown-content';

  return (
    <ul className="dropdown">
      <button
        type="button"
        className="dropdown-container"
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleDropdown();
          }
        }}
        aria-label="Toggle Dropdown"
      >
        <p>Decouvrir</p>
        <span className="angle-down">
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>

      <div className={isOpenClassName}>
        <li className="dropdown-item">
          <Link className="dropdown-link" to="/guide">
            Guide
          </Link>
        </li>
        <li className="dropdown-item">
          <Link className="dropdown-link" to="/personnages">
            Personnages
          </Link>
        </li>
        <li className="dropdown-item">
          <Link className="dropdown-link" to="/bestaire">
            Bestiaire
          </Link>
        </li>
        <li className="dropdown-item">
          <Link className="dropdown-link" to="/armes">
            Armes
          </Link>
        </li>
        <li className="dropdown-item">
          <Link className="dropdown-link" to="/items">
            Guide
          </Link>
        </li>
      </div>
    </ul>
  );
}
