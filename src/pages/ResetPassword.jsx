/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { resetUserPassword } from '../store/middleware/updateUserMiddleware';

export default function ResetPassword() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get('token');
  const decodedToken = jwtDecode(token);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const newPassword = watch('newPassword', '');
  const passwordConfirmation = watch('passwordConfirmation', '');

  const onSubmit = async (data) => {
    const dataWithToken = { ...data, token };
    const response = await dispatch(resetUserPassword(dataWithToken));

    if (!response.error) {
      navigate('/');
    }
  };

  return (
    <main className="main-reset-password">
      <section className="section-reset-password">
        <h1 className="title">O&apos;Survivors</h1>
        <div className="modal-content">
          <div className="form-container">
            <h2 className="form__title">Réinitialise ton mot de passe</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-container">
                <input
                  disabled
                  className="form__input form__input--disabled"
                  type="email"
                  value={decodedToken?.email}
                />
              </div>

              <div className="input-container">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Nouveau mot de passe"
                  {...register('newPassword', {
                    required: 'Ce champ est requis',
                    pattern: {
                      value: /^[a-zA-Z0-9$!?*_%]{8,64}$/,
                      message:
                        'Le mot de passe doit contenir au moins 8 caractèrs',
                    },
                  })}
                  aria-invalid={errors.newPassword ? 'true' : 'false'}
                />
                <span
                  className={
                    newPassword
                      ? 'required-asterisk'
                      : 'required-asterisk required-asterisk--new-password'
                  }
                >
                  *
                </span>
              </div>
              <div className="error-container">
                <p className="form__error">{errors.newPassword?.message}</p>
              </div>

              <div className="input-container">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Confrimer le nouveau mot de passe"
                  {...register('passwordConfirmation', {
                    required: 'Ce champ est requis',
                    validate: (value) => value === newPassword || 'Les mots de passe ne correspondent pas',
                  })}
                  aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
                />
                <span
                  className={
                    passwordConfirmation
                      ? 'required-asterisk'
                      : 'required-asterisk required-asterisk--confirm-new-password'
                  }
                >
                  *
                </span>
              </div>
              <div className="error-container">
                <p className="form__error">
                  {errors.passwordConfirmation?.message}
                </p>
              </div>

              {newPassword && passwordConfirmation ? (
                <button
                  className="form__button form__button--signin"
                  type="submit"
                >
                  Sauvegarder
                </button>
              ) : (
                <button
                  disabled
                  className="form__button form__button--signin"
                  type="submit"
                >
                  Sauvegarder
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
