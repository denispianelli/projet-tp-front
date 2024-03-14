/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

export default function Email({ register, watch, errors }) {
  const email = watch('email', '');

  return (
    <>
      <div className="input-container">
        <input
          className="form__input"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Ce champ est requis',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email invalide',
            },
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        <span
          className={
            email
              ? 'required-asterisk'
              : 'required-asterisk required-asterisk--email'
          }
        >
          *
        </span>
      </div>
      <div className="error-container">
        <p className="form__error">{errors.email?.message}</p>
      </div>
    </>
  );
}

Email.propTypes = {
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};
