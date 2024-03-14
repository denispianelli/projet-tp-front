/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

export default function Username({ register, watch, errors }) {
  const username = watch('username', '');

  return (
    <>
      <div className="input-container">
        <input
          className="form__input"
          type="text"
          placeholder="Pseudo"
          {...register('username', { required: 'Ce champ est requis' })}
          aria-invalid={errors.username ? 'true' : 'false'}
        />
        <span
          className={
              username
                ? 'required-asterisk'
                : 'required-asterisk required-asterisk--show'
            }
        >
          *
        </span>
      </div>
      <div className="error-container">
        <p className="form__error">{errors.username?.message}</p>
      </div>
    </>

  );
}

Username.propTypes = {
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};
