/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { openModal, closeModal } from '../../store/slices/modalSlice';
import { signupUser } from '../../store/middleware/authMiddleware';
import { resetError } from '../../store/slices/authSlice';
import Username from './inputs/Username';
import Email from './inputs/Email';
import Password from './inputs/Password';

export default function Signup() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  let errorMsg;

  switch (error?.constraint) {
    case 'user_username_key':
      errorMsg = 'Ce pseudo est déjà pris';
      break;
    case 'user_email_key':
      errorMsg = 'Cet email est déjà utilisé';
      break;
    default:
      break;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  const [loadingClassName, setLoadingClassName] = useState('loading');

  useEffect(() => {
    if (isAuth) {
      dispatch(closeModal());
    }

    setTimeout(() => {
      if (!loading) {
        setLoadingClassName('loading');
      }
      if (loading) {
        setLoadingClassName('loading loading--show');
      }
    }, 500);
  }, [isAuth, loading]);

  const email = watch('email', '');
  const username = watch('username', '');
  const password = watch('password', '');

  return (
    <div className="form-container">
      <h2 className="form__title">S&apos;inscrire</h2>
      {errorMsg && <div className="errorMsg-container">{errorMsg}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Username register={register} watch={watch} errors={errors} />
        <Email register={register} watch={watch} errors={errors} />
        <Password register={register} watch={watch} errors={errors} />

        <p className="form__text">
          Déjà inscrit ?
          {' '}
          <button
            type="button"
            className="form__link"
            onClick={() => {
              dispatch(resetError());
              dispatch(openModal('signin'));
            }}
          >
            Se connecter
          </button>
        </p>

        {email && username && password ? (
          <button className="form__button" type="submit">
            S&apos;inscrire
          </button>
        ) : (
          <button disabled className="form__button" type="submit">
            S&apos;inscrire
          </button>
        )}
      </form>
      <p className={loadingClassName}>Chargement en cours...</p>
    </div>
  );
}
