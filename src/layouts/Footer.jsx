import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="line-container">
        <span className="line" />
        <img src="/assets/ui/home/coin-animated.gif" alt="piece animée" />
        <span className="line" />
      </div>
      <ul className="footer__list">
        <Link className="footer__item" to="/contact">
          <li>contact</li>
        </Link>
        <Link className="footer__item" to="/privacy-policy">
          <li>politque de confidentialité</li>
        </Link>
        <Link className="footer__item" to="/legal-notice">
          <li>mention légales</li>
        </Link>
      </ul>
      <div className="line-container">
        <span className="line" />
        <img src="/assets/ui/home/coin-animated.gif" alt="piece animée" />
        <span className="line" />
      </div>
      <p className="footer__copyright">© 2024 o&apos;survivors</p>
    </footer>
  );
}
