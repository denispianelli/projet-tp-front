/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import sendMailContact from '../store/middleware/contactMiddleware';

export default function Contact() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.contact);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const username = watch('username', '');
  const email = watch('email', '');
  const object = watch('object', '');
  const message = watch('message', '');

  const onSubmit = (data) => {
    dispatch(sendMailContact(data));
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="main-contact">
          <section className="section-contact">
            <div className="form__container">
              <h2 className="form__title form__title--center">Contacte-nous</h2>
              <p className="form__text form__text--center">
                Tu as une question, un commentaire ?
                <br />
                Envoie-nous un message !
              </p>
              <div className="loader">Chargement..</div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="main-contact">
          <section className="section-contact">
            <div className="form__container">
              <h2 className="form__title form__title--center">Contacte-nous</h2>
              <p className="form__text form__text--center">
                Tu as une question, un commentaire ?
                <br />
                Envoie-nous un message !
              </p>
              <div className="error-container">
                <p className="form__error">
                  Une erreur s&apos;est produite, veuillez réessayer.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="main-contact">
        <section className="section-contact">
          <div className="form__container">
            <h2 className="form__title form__title--center">Contacte-nous</h2>
            <p className="form__text form__text--center">
              Tu as une question, un commentaire ?
              <br />
              Envoie-nous un message !
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-container">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Nom/Prénom*"
                  {...register('username', { required: 'Ce champ est requis' })}
                />
                <div className="error-container">
                  <p className="form__error">{errors.username?.message}</p>
                </div>
              </div>

              <div className="input-container">
                <input
                  className="form__input"
                  type="email"
                  placeholder="Email*"
                  {...register('email', { required: 'Ce champ est requis' })}
                />
                <div className="error-container">
                  <p className="form__error">{errors.email?.message}</p>
                </div>
              </div>

              <div className="input-container">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Objet*"
                  {...register('object', { required: 'Ce champ est requis' })}
                />
                <div className="error-container">
                  <p className="form__error">{errors.object?.message}</p>
                </div>
              </div>

              <div className="input-container">
                <textarea
                  className="form__input form__input--textarea"
                  placeholder="Message*"
                  {...register('message', { required: 'Ce champ est requis' })}
                />
                <div className="error-container">
                  <p className="form__error">{errors.object?.message}</p>
                </div>
              </div>

              {username && email && object && message ? (
                <button
                  className="form__button form__button--contact"
                  type="submit"
                >
                  Envoyer
                </button>
              ) : (
                <button
                  disabled
                  className="form__button form__button--contact"
                  type="submit"
                >
                  Envoyer
                </button>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
