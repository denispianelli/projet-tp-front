import React from 'react';

export default function PasswordUpdated() {
  return (
    <div className="form-container">
      <h2 className="form__title">Modification réussie</h2>
      <p className="form__text form__text--success">
        Votre mot de passe a bien été modifié.
      </p>
    </div>
  );
}
