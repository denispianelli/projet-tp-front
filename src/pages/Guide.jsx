import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Guide() {
  return (
    <>
      <Header />
      <main className="main-guide">
        <section className="section-guide">
          <h2 className="guide__title">Guide</h2>
          <div className="guide-container">
            <h3 className="guide__subtitle">Bienvenue sur notre guide</h3>
            <p className="guide__text guide__text--center">
              Vous trouverez ici toutes les informations nécessaires pour bien
              commencer votre aventure dans le monde d&apos;O&apos;Survivors.
            </p>
            <article className="guide__article">
              <img
                className="guide__img"
                src="/assets/ui/pc-keyboard-arrow-keys.jpg"
                alt="pc-keyboard-arrow-keys"
              />
              <div>
                <p className="guide__text">
                  Utilisez les
                  {' '}
                  <strong>touches directionnelles</strong>
                  {' '}
                  ou les touches
                  {' '}
                  <strong>W, A, S, D </strong>
                  pour déplacer votre personnage.
                </p>
                <br />
                <p className="guide__text">
                  <strong>Haut</strong>
                  {' '}
                  : Avancer
                </p>
                <p className="guide__text">
                  <strong>Bas</strong>
                  {' '}
                  : Reculer
                </p>
                <p className="guide__text">
                  <strong>Gauche</strong>
                  {' '}
                  : Aller à gauche
                </p>
                <p className="guide__text">
                  <strong>Droite</strong>
                  {' '}
                  : Aller à droite
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
