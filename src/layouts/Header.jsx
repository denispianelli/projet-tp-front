import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaUserAstronaut } from 'react-icons/fa';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { openModal } from '../store/slices/modalSlice';
import Navbar from '../components/ui/Navbar';
import AccountDropdown from '../components/ui/AccountDropdown';
import {
  setDarkTheme,
  setLightTheme,
  toggleTheme,
} from '../store/slices/themeSlice';
import Burger from '../components/ui/Burger';

export default function Header() {
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const theme = useSelector((state) => state.theme.mode);
  const themeLocal = localStorage.getItem('theme');

  useEffect(() => {
    if (themeLocal) {
      dispatch(themeLocal === 'dark' ? setDarkTheme() : setLightTheme());
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollThreshold = 10;

      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, []);

  const headerClassName = isScrolled ? 'header header--scrolled' : 'header';

  const handleThemeToggle = () => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    dispatch(toggleTheme());
  };

  return (
    <header className={headerClassName}>
      <h1 className="header__title">
        <Link to="/">o&apos;survivors</Link>
      </h1>

      <Burger />

      <Navbar />

      <div className="header__right-container">
        {theme === 'dark' ? (
          <MdOutlineDarkMode
            className="theme-icon"
            onClick={handleThemeToggle}
          />
        ) : (
          <MdOutlineLightMode
            className="theme-icon"
            onClick={handleThemeToggle}
          />
        )}

        {isAuth ? (
          <div className="account-container">
            <AccountDropdown
              title={<FaUserAstronaut className="account-icon" />}
            />
          </div>
        ) : (
          <div
            className="account-container"
            role="button"
            tabIndex={0}
            onClick={() => dispatch(openModal('signin'))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                dispatch(openModal('signin'));
              }
            }}
          >
            <FaRegCircleUser className="account-icon" />
            <button className="header__button" type="button">
              Connexion
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
