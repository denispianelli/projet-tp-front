import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="main-profil">
        <section className="section-profil">
          <div className="privacy-policy-container">
            <h1 className="privacy-policy__title">
              Politique de confidentialitée
            </h1>
            <h2 className="privacy-policy__subtitle">
              Collecte et Utilisation d&apos;Informations Personnelles
            </h2>

            <p className="privacy-policy__text">
              Nous pouvons collecter des informations personnelles telles que
              votre nom, votre adresse e-mail et d&apos;autres informations
              d&apos;identification lorsque vous utilisez notre site web. Ces
              informations seront utilisées uniquement dans le but pour lequel
              elles ont été fournies.
            </p>
            <h2 className="privacy-policy__subtitle">Cookies</h2>
            <p className="privacy-policy__text">
              Notre site web utilise des cookies pour améliorer
              l&apos;expérience utilisateur. Ces cookies peuvent collecter des
              informations telles que votre adresse IP, le type de navigateur,
              le temps passé sur le site et les pages visitées. Vous pouvez
              désactiver les cookies dans les paramètres de votre navigateur.
            </p>
            <h2 className="privacy-policy__subtitle">
              Partage d&apos;Informations Personnelles
            </h2>
            <p className="privacy-policy__text">
              Nous ne partagerons pas vos informations personnelles avec des
              tiers sans votre consentement, sauf si requis par la loi.
            </p>
            <h2 className="privacy-policy__subtitle">
              Sécurité des Informations Personnelles
            </h2>
            <p className="privacy-policy__text">
              Nous mettons en place des mesures de sécurité pour protéger vos
              informations personnelles contre l&apos;accès non autorisé, la
              divulgation, l&apos;altération ou la destruction.
            </p>
            <h2 className="privacy-policy__subtitle">
              Liens vers des Sites Tiers
            </h2>
            <p className="privacy-policy__text">
              Notre site web peut contenir des liens vers des sites tiers. Nous
              ne sommes pas responsables des pratiques de confidentialité de ces
              sites et vous encourageons à lire leurs politiques de
              confidentialité.
            </p>
            <h2 className="privacy-policy__subtitle">
              Modifications de la Politique de Confidentialité
            </h2>
            <p className="privacy-policy__text">
              Nous nous réservons le droit de modifier notre politique de
              confidentialité à tout moment. Les modifications seront publiées
              sur cette page.
            </p>
            <p className="privacy-policy__text">
              En utilisant notre site web, vous consentez à notre politique de
              confidentialité.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
