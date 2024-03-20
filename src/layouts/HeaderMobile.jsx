import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaUserAstronaut } from 'react-icons/fa';
import { MdOutlineLightMode } from 'react-icons/md';
import Burger from '../components/ui/Burger';
import Navbar from '../components/ui/Navbar';
import { openModal } from '../store/slices/modalSlice';
import AccountDropdown from '../components/ui/AccountDropdown';
import { toggleTheme } from '../store/slices/themeSlice';

export default function HeaderMobile() {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollThreshold = 100;

      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = isScrolled ? 'header header--scrolled' : 'header';

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={headerClassName}>
      <Burger />

      <Navbar />

      <div className="header__right-container">
        <MdOutlineLightMode
          className="theme-icon"
          onClick={handleThemeToggle}
        />
        {isAuth ? (
          <div className="account-container">
            <AccountDropdown
              className="account-dropdown"
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
            aria-label="Open Sign In Modal"
          >
            <FaRegCircleUser className="account-icon" />
          </div>
        )}
      </div>
    </header>
  );
}
