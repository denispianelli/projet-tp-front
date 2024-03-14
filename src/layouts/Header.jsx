import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaUserAstronaut } from 'react-icons/fa';
import { openModal } from '../store/slices/modalSlice';
import Navbar from '../components/ui/Navbar';
import AccountDropdown from '../components/ui/AccountDropdown';

export default function Header() {
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

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

  return (
    <header className={headerClassName}>
      <h1 className="header__title">
        <Link to="/">o&apos;survivors</Link>
      </h1>

      <Navbar />

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
    </header>
  );
}
