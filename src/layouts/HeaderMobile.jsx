import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';
import Burger from '../components/ui/Burger';
import Navbar from '../components/ui/Navbar';

export default function HeaderMobile() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <Burger />

      <Navbar />

      <div className="account-container">
        <Link className="link" to="/connexion">
          <FaRegCircleUser className="account-icon" />
        </Link>
      </div>
    </header>
  );
}
