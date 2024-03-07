import React, { useState } from 'react';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isUsernameFilled, setUsernameIsFilled] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsUsernameValid(e.target.value.length > 0);
    setUsernameIsFilled(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(e.target.value.length > 0);
    setIsPasswordFilled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre les données (par exemple, à un backend)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="form-container">
      <h2 className="form__title">Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className={
              isUsernameFilled && !isUsernameValid
                ? 'form__input form__input--error'
                : 'form__input'
            }
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Pseudo"
            required
          />
          <span
            className={
              !isUsernameValid
                ? 'required-asterisk required-asterisk--show'
                : 'required-asterisk'
            }
          >
            *
          </span>
        </div>
        <p
          className={
            isUsernameFilled && !isUsernameValid
              ? 'form__error form__error--show'
              : 'form__error'
          }
        >
          Veuillez renseigner ce champ
        </p>
        <div className="input-container">
          <input
            className={
              isPasswordFilled && !isPasswordValid
                ? 'form__input form__input--error'
                : 'form__input'
            }
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Mot de passe"
            required
          />
          <span
            className={
              !isPasswordValid
                ? 'required-asterisk required-asterisk--show'
                : 'required-asterisk'
            }
          >
            *
          </span>
        </div>
        <p
          className={
            isPasswordFilled && !isPasswordValid
              ? 'form__error form__error--show'
              : 'form__error'
          }
        >
          Veuillez renseigner ce champ
        </p>

        <p className="form__text">
          Tu as oublié ton
          <span className="form__link"> mot de passe</span>
          {' '}
          ?
        </p>

        <p className="form__text">
          Première fois sur O&apos;Survivors ?
          <span className="form__link"> Inscris-toi</span>
        </p>

        {isUsernameValid && isPasswordValid ? (
          <button className="form__button" type="submit">
            Se connecter
          </button>
        ) : (
          <button className="form__button" disabled type="submit">
            Se connecter
          </button>
        )}
      </form>
    </div>
  );
}

export default Signin;
