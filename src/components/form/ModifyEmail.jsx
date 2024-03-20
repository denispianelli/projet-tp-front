/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Password from './inputs/Password';
import Email from './inputs/Email';
import { updateUserEmail } from '../../store/middleware/updateUserMiddleware';

export default function ModifyEmail() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const email = watch('email', '');
  const password = watch('password', '');

  const onSubmit = (data) => {
    dispatch(updateUserEmail(data));
  };

  return (
    <div className="form-container">
      <h2 className="form__title">Modifier votre adresse mail</h2>
      {error && <div className="errorMsg-container">{error}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Password register={register} watch={watch} errors={errors} />
        <Email register={register} watch={watch} errors={errors} />
        {email && password ? (
          <button className="form__button" type="submit">
            Valider
          </button>
        ) : (
          <button disabled className="form__button" type="submit">
            Valider
          </button>
        )}
      </form>
    </div>
  );
}
