import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { closeMenu } from '../../store/slices/menuSlice';

function Dropdown({ title, items }) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  const handleLinkClick = () => {
    closeDropdown();
    dispatch(closeMenu());
  };

  const isClickedClassName = isOpen
    ? 'dropdown-container dropdown-container--clicked'
    : 'dropdown-container';
  const isOpenClassName = isOpen
    ? 'dropdown-content dropdown-content--toggled'
    : 'dropdown-content';

  return (
    <div
      className="dropdown"
      onMouseEnter={isDesktop ? toggleDropdown : undefined}
      onMouseLeave={isDesktop ? toggleDropdown : undefined}
    >
      <button
        type="button"
        className={isClickedClassName}
        onClick={isMobile ? toggleDropdown : undefined}
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
              <Link
                className="dropdown-link"
                to={item.path}
                onClick={handleLinkClick}
              >
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
