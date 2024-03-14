import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { closeMenu } from '../../store/slices/menuSlice';

function AccountDropdown({ title }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    dispatch(closeMenu());
  };

  const isClickedClassName = isOpen
    ? 'account-dropdown-container account-dropdown-container--clicked'
    : 'account-dropdown-container';
  const isOpenClassName = isOpen
    ? 'account-dropdown-content account-dropdown-content--toggled'
    : 'account-dropdown-content';

  return (
    <>
      <div className="account-dropdown">
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
          {user.username}
        </button>
      </div>
      <ul className={isOpenClassName}>
        <li className="account-dropdown-item">
          <Link className="account-dropdown-link" to={`/user/${user.username}`}>
            Voir le profil
          </Link>
        </li>
        <li className="account-dropdown-item">Logout</li>
      </ul>
    </>
  );
}

export default AccountDropdown;
