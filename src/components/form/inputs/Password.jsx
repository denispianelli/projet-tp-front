/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

export default function Password({ register, watch, errors }) {
  const password = watch('password', '');

  return (
    <>
      <div className="input-container">
        <input
          className="form__input"
          type="password"
          placeholder="Mot de passe"
          {...register('password', {
            required: 'Ce champ est requis',
            pattern: {
              value: /^[a-zA-Z0-9$!?*_%]{8,64}$/,
              message: 'Le mot de passe doit contenir au moins 8 caractèrs',
            },
          })}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        <span
          className={
            password
              ? 'required-asterisk'
              : 'required-asterisk required-asterisk--password'
          }
        >
          *
        </span>
      </div>
      <div className="error-container">
        <p className="form__error">{errors.password?.message}</p>
      </div>
    </>
  );
}

Password.propTypes = {
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};
