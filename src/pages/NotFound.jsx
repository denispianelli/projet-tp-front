import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="main-not-found">
        <section className="section-not-found">
          <h2 className="not-found__title">404</h2>
          <p className="not-found__text">
            Oups, on dirait que tu t&apos;es perdu(e).
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
