import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import useFetch from '../hooks/useFetch';

export default function Enemies() {
  const apiUrl = 'http://localhost:3001/v1/api/enemies';

  const { data, isLoading, error } = useFetch(apiUrl);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return (
      <p>
        Erreur:
        {error.message}
      </p>
    );
  }

  return (
    <>
      <Header />
      <main className="main-enemies">
        <section className="section-enemies">
          <h2 className="enemy__title">Ennemis</h2>
          <div className="enemy-card-container">
            {data.map((enemy) => (
              <div key={enemy.id} className="enemy__card">
                <img
                  className="enemy__img"
                  src={`/assets/gif/${enemy.name}.gif`}
                  alt={enemy.name}
                />
                <h3 className="enemy__subtitle">{enemy.name}</h3>
                <p className="enemy__text">
                  PV :
                  <span>{enemy.health}</span>
                </p>
                <p className="enemy__text">
                  Puissance :
                  <span>{enemy.power}</span>
                </p>
                <p className="enemy__text">
                  Vitesse :
                  <span>{enemy.speed}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
