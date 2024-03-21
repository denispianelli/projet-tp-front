/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/middleware/authMiddleware';
import { closeModal, openModal } from '../../store/slices/modalSlice';
import Username from './inputs/Username';
import Password from './inputs/Password';

export default function Signin() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    dispatch(loginUser(formData));
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

  const username = watch('username', '');
  const password = watch('password', '');

  return (
    <div className="form-container">
      <h2 className="form__title">Se connecter</h2>
      {error && <div className="errorMsg-container">{error}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Username register={register} watch={watch} errors={errors} />
        <Password register={register} watch={watch} errors={errors} />

        <p className="form__text">
          Tu as oublié ton
          <button className="form__link" type="button" onClick={() => dispatch(openModal('resetPassword'))}>
            mot de passe
          </button>
          ?
        </p>

        <p className="form__text">
          Première fois sur O&apos;Survivors ?
          <button
            type="button"
            className="form__link"
            onClick={() => dispatch(openModal('signup'))}
          >
            {' '}
            Inscris-toi
          </button>
        </p>

        {password && username ? (
          <button className="form__button form__button--signin" type="submit">
            Se connecter
          </button>
        ) : (
          <button
            disabled
            className="form__button form__button--signin"
            type="submit"
          >
            Se connecter
          </button>
        )}
      </form>
      <p className={loadingClassName}>Chargement en cours...</p>
    </div>
  );
}
