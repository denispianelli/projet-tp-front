import React from 'react';

export default function SignupSuccess() {
  return (
    <div className="form-container">
      <h2 className="form__title">Inscription réussie</h2>
      <p className="form__text form__text--center">
        Un email de confirmation vous a été envoyé.
      </p>
      <p className="form__text form__text--center">
        Si vous ne le trouvez pas dans votre boîte de réception, veuillez
        vérifier votre dossier de spam.
      </p>
      <p className="form__text form__text--center">
        Si vous ne l&apos;avez toujours pas reçu, veuillez réessayer de vous
        connecter.
      </p>
    </div>
  );
}
