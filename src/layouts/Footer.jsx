import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="line-container">
        <span className="line" />
        <img src="/assets/ui/home/coin-animated.gif" alt="piece animée" />
        <span className="line" />
      </div>
      <ul className="footer__list">
        <li className="footer__item">contact</li>
        <li className="footer__item">politque de confidentialité</li>
        <li className="footer__item">mention légales</li>
        <li className="footer__item">© 2024 o&apos;survivors</li>
      </ul>
    </footer>
  );
}
