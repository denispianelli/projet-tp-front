import React from 'react';

export default function About() {
  return (
    <section className="about">
      <div className="line-container">
        <span className="line" />
        <img src="/assets/ui/home/coin-animated.gif" alt="piece animée" />
        <span className="line" />
      </div>
      <div className="about__title-container">
        <h2 className="about__title">À propos</h2>
      </div>
      <p className="about__text">
        Plongez dans l&apos;aventure palpitante d&apos;O&apos;Survivors, où vous
        affrontez seul les hordes de créatures maléfiques dans un monde
        mystérieux et hostile.Utilisez vos compétences et votre intelligence
        pour survivre aux assauts incessants des monstres et atteindre la
        lumière du jour. Seuls les plus vaillants et déterminés pourront espérer
        triompher dans ce jeu d&apos;action survolté et plein de
        rebondissements.
      </p>
      <div className="line-container">
        <span className="line" />
        <img src="/assets/ui/home/coin-animated.gif" alt="piece animée" />
        <span className="line" />
      </div>
    </section>
  );
}
