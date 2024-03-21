import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import { openModal } from '../store/slices/modalSlice';
import { setUser } from '../store/slices/authSlice';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Profile() {
  const dispatch = useDispatch();

  const apiUrl = 'http://localhost:3001/v1/api/user';

  const authToken = localStorage.getItem('token');

  const requestOptions = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const { data, isLoading, error } = useFetch(apiUrl, requestOptions);

  const email = useSelector((state) => state.auth.user?.email);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data]);

  return (
    <>
      <Header />
      <main className="main-profil">
        <section className="section-profil">
          <h2 className="profil__heading">Paramètre du compte</h2>
          <h3 className="profil__subheading">préférence du compte</h3>
          <div className="profil-settings">
            <div>
              <h4 className="profil__title">Adresse mail</h4>
              <p className="profil__text">{email}</p>
            </div>
            <button
              onClick={() => dispatch(openModal('modify-email'))}
              className="profil__button"
              type="button"
            >
              changer
            </button>
          </div>
          <div className="profil-settings">
            <div>
              <h4 className="profil__title">Changer le mot de passe</h4>
              <p className="profil__text">
                Le mot de passe doit contenir au moins 8 caractères
              </p>
            </div>
            <button
              onClick={() => dispatch(openModal('modify-password'))}
              className="profil__button"
              type="button"
            >
              changer
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
