import React from 'react';
import { FaComputer } from 'react-icons/fa6';
import About from '../layouts/About';

export default function Home() {
  return (
    <main className="main-home">
      <section className="section-home">
        <h1 className="home__title">o&apos;survivors</h1>
        <button className="home__button" type="button">
          Jouer
        </button>
        <div className="home__info-container">
          <FaComputer className="computer-icon" />
          <p className="home__info">Disponible sur PC</p>
        </div>
      </section>
      <About />
      <div className="home__image-container">
        <h2 className="image__title">Rejoignez la bataille</h2>
      </div>
    </main>
  );
}
