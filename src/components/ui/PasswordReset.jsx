import React from 'react';
import { useDispatch } from 'react-redux';
import { CiMail } from 'react-icons/ci';
import { openModal } from '../../store/slices/modalSlice';

export default function PasswordReset() {
  const dispatch = useDispatch();
  return (
    <div className="form-container form-container--center">
      <CiMail className="mail-icon" />
      <h2 className="form__title form__title--center">
        Consulte ta boîte de réception
      </h2>
      <p className="form__text form__text--center">
        Tu recevras un email avec un lien pour réinitialiser ton mot de passe si
        l&apos;adresse que tu as fournie a été vérifiée.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <p className="form__text form__text--center">
          Tu n&apos;as pas reçu l&apos;email ? Consulte ton dossier de spam ou
        </p>
        <button className="form__button" type="submit" onClick={() => dispatch(openModal('resetPassword'))}>
          Essaie une autre adresse email
        </button>
      </div>
    </div>
  );
}
