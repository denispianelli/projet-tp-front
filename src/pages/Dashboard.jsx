import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="main-home">
        <section className="section-home">
          <h1 className="home__title">o&apos;survivors</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
