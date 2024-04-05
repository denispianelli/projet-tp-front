import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import useFetch from '../hooks/useFetch';

export default function Stages() {
  const apiUrl = 'http://localhost:3001/v1/api/stages';

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
      <main className="main-stages">
        <section className="section-stages">
          <h2 className="character__title">Niveaux</h2>
          <div className="character-card-container">
            {data.map((stage) => (
              <div key={stage.id} className="character__card">
                <img
                  className="character__img"
                  src={`/assets/ui/${stage.name}.png`}
                  alt={stage.name}
                />
                <h3 className="character__subtitle">{stage.name}</h3>
                <p className="character__description">
                  "
                  {stage.description}
                  "
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
