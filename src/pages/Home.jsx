import React from 'react';
import { FaComputer } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import About from '../layouts/About';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Home() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  return (
    <>
      <Header />
      <main className="main-home">
        <section className="section-home">
          <h1 className="home__title">o&apos;survivors</h1>
          {isMobile ? (
            <button
              className="home__button"
              type="button"
              onClick={() => navigate('/guide')}
            >
              Découvrir
            </button>
          ) : (
            <button
              className="home__button"
              type="button"
              onClick={() => navigate('/game')}
            >
              Jouer
            </button>
          )}
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
      <Footer />
    </>
  );
}
