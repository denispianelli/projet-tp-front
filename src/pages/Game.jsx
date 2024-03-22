import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import GameContainer from '../features/GameContainer';

export default function Game() {
  return (
    <>
      <Header />
      <main className="main-game">
        <section className="section-game">
          <GameContainer />
        </section>
      </main>
      <Footer />
    </>
  );
}
