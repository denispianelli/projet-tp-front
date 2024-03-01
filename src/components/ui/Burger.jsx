import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../slices/menuSlice';

export default function Burger() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const isToggledBurgerClassName = isOpen
    ? 'burger-menu burger-menu--toggled'
    : 'burger-menu';

  return (
    <button
      type="button"
      className={isToggledBurgerClassName}
      onClick={handleToggleMenu}
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
  );
}
