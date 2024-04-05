/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';
import useFetch from '../hooks/useFetch';

export default function EmailVerified() {
  const location = useLocation();
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get('token');
  const apiUrl = `http://localhost:3001/v1/api/account/email/verifyemail?token=${token}`;

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
    <main className="main-reset-password">
      <section className="section-reset-password">
        <h1 className="title">O&apos;Survivors</h1>
        <div className="modal-content">
          <div className="form-container">
            <FaCheck className="check-icon" />

            <h2 className="form__title form__title--center">
              {data?.error ? 'Ton adresse email est déjà vérifiée' : 'Ton adresse email a été vérifiée avec succès.'}
            </h2>
            <p className="form__text form__text--center">
              Tu es maintenant prêt à profiter pleinement des fonctionnalités de
              notre jeu O&apos;Survivors. Nous espérons que cela te plaira !
              N&apos;hésite surtout pas à nous contacter si tu as des questions
              ou des préoccupations.
            </p>
            <br />
            <p className="form__text">L&apos;équipe d&apos;O&apos;Survivors</p>
          </div>
          <button
            className="form__button"
            type="button"
            onClick={() => navigate('/')}
          >
            Continuer
          </button>
        </div>
      </section>
    </main>
  );
}
