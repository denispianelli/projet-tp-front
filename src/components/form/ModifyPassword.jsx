/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPassword } from '../../store/middleware/updateUserMiddleware';

export default function ModifyPassword() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);
  console.log('ModifyPassword ~ error:', error);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const oldPassword = watch('oldPassword', '');
  const newPassword = watch('newPassword', '');
  const passwordConfirmation = watch('passwordConfirmation', '');

  const onSubmit = (data) => {
    dispatch(updateUserPassword(data));
  };

  return (
    <div className="form-container">
      <h2 className="form__title">Modifier votre mot de passe</h2>
      {error && <div className="errorMsg-container">{error}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <input
            className="form__input"
            type="password"
            placeholder="Ancien mot de passe"
            {...register('oldPassword', {
              required: 'Ce champ est requis',
            })}
          />
          <span
            className={
              oldPassword
                ? 'required-asterisk'
                : 'required-asterisk required-asterisk--old-password'
            }
          >
            *
          </span>
        </div>
        <div className="error-container">
          <p className="form__error">{errors.oldPassword?.message}</p>
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
                message: 'Le mot de passe doit contenir au moins 8 caractèrs',
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
              pattern: {
                value: /^[a-zA-Z0-9$!?*_%]{8,64}$/,
                message: 'Le mot de passe doit contenir au moins 8 caractèrs',
              },
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
          <p className="form__error">{errors.passwordConfirmation?.message}</p>
        </div>

        {oldPassword && newPassword && passwordConfirmation ? (
          <button className="form__button" type="submit">
            Sauvegarder
          </button>
        ) : (
          <button disabled className="form__button" type="submit">
            Sauvegarder
          </button>
        )}
      </form>
    </div>
  );
}
