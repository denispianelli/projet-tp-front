import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegCircleUser } from 'react-icons/fa6';
import Burger from '../components/ui/Burger';
import Navbar from '../components/ui/Navbar';
import { toggleModal } from '../slices/modalSlice';

export default function HeaderMobile() {
  const dispatch = useDispatch();
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

      <div
        className="account-container"
        role="button"
        tabIndex={0}
        aria-label="Account"
        onClick={() => dispatch(toggleModal())}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            dispatch(toggleModal());
          }
        }}
      >
        <FaRegCircleUser className="account-icon" />
      </div>
    </header>
  );
}
