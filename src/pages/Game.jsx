import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { FaComputer } from 'react-icons/fa6';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import GameContainer from '../features/GameContainer';

export default function Game() {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="main-home">
        <section className="section-home">
          {isMobile ? (
            <>
              <h1 className="home__title">o&apos;survivors</h1>
              <button
                className="home__button"
                type="button"
                onClick={() => navigate('/discover')}
              >
                Découvrir
              </button>
              <div className="home__info-container">
                <FaComputer className="computer-icon" />
                <p className="home__info">Disponible sur PC</p>
              </div>
            </>
          ) : (
            <GameContainer />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
