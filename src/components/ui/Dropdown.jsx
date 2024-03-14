import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import PropTypes from 'prop-types';

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const isClickedClassName = isOpen
    ? 'dropdown-container dropdown-container--clicked'
    : 'dropdown-container';
  const isOpenClassName = isOpen
    ? 'dropdown-content dropdown-content--toggled'
    : 'dropdown-content';

  return (
    <div className="dropdown">
      <button
        type="button"
        className={isClickedClassName}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter') toggleDropdown();
        }}
        aria-label="Toggle Dropdown"
      >
        {title}
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>

      {isOpen && (
        <ul className={isOpenClassName}>
          {items.map((item) => (
            <li key={item.path} className="dropdown-item">
              <Link className="dropdown-link" to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Dropdown;
