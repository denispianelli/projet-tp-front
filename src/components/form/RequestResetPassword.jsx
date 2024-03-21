/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';
import Username from './inputs/Username';
import Email from './inputs/Email';
import { resetPassword } from '../../store/middleware/resetPasswordMiddleware';

export default function RequestResetPassword() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.account);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(resetPassword(data));
  };

  const username = watch('username', '');
  const email = watch('email', '');

  return (
    <div className="form-container">
      <h2 className="form__title">Réinitialiser le mot de passe</h2>
      <p className="form__text">
        Renseigne ton pseudo et l&apos;adresse mail associés à ton compte
        O&apos;Survivors et nous t&apos;enverrons un email avec un lien pour
        réinitialiser ton mot de passe.
      </p>
      {error && <div className="errorMsg-container">{error}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Username register={register} watch={watch} errors={errors} />
        <Email register={register} watch={watch} errors={errors} />

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

        <p className="form__text">
          Tu as déjà un compte ?
          <button
            className="form__link"
            type="button"
            onClick={() => dispatch(openModal('signin'))}
          >
            Se connecter
          </button>
        </p>

        {email && username ? (
          <button className="form__button form__button--signin" type="submit">
            Réinitialiser le mot de passe
          </button>
        ) : (
          <button
            disabled
            className="form__button form__button--signin"
            type="submit"
          >
            Réinitialiser le mot de passe
          </button>
        )}
      </form>
    </div>
  );
}
