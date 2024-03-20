import React from 'react';

export default function EmailUpdated() {
  return (
    <div className="form-container">
      <h2 className="form__title">Modification réussie</h2>
      <p className="form__text form__text--success">
        Votre adresse mail a bien été modifiée.
      </p>
    </div>
  );
}
