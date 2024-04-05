import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import useFetch from '../hooks/useFetch';

export default function Characters() {
  const apiUrl = 'http://localhost:3001/v1/api/characters';

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
      <main className="main-characters">
        <section className="section-characters">
          <h2 className="character__title">Personnages</h2>
          <div className="character-card-container">
            {data.map((character) => (
              <div key={character.id} className="character__card">
                <img
                  className="character__img"
                  src={`../../public/assets/gif/${character.name}.gif`}
                  alt={character.name}
                />
                <h3 className="character__subtitle">{character.name}</h3>
                <p className="character__description">
                  "
                  {character.description}
                  "
                </p>
                <br />
                <p className="character__text">
                  Coût :
                  <div>
                    <span>{character.cost}</span>
                    <img src="/assets/ui/characterMenu/coin.png" alt="coin" />
                  </div>
                </p>
                <p className="character__text">
                  Arme :
                  <span>{character.weapon_name}</span>
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
