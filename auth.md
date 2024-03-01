# Auth

1. Authentification côté backend: Assurez-vous que votre backend est configuré pour gérer l'authentification des utilisateurs et pour renvoyer un JWT après une connexion réussie. Le JWT devrait contenir les informations d'identification de l'utilisateur ainsi que toute autre donnée nécessaire pour autoriser les requêtes ultérieures.

2. Action Creators et Reducers Redux: Définissez des action creators et des reducers Redux pour gérer l'authentification de l'utilisateur. Vous aurez probablement besoin d'actions pour se connecter, se déconnecter et mettre à jour les informations d'identification de l'utilisateur.

3. Middleware Redux pour les requêtes API: Utilisez un middleware Redux tel que Redux Thunk ou Redux Saga pour gérer les requêtes API d'authentification. Lorsque l'utilisateur soumet ses informations d'identification, une action de connexion sera dispatchée, puis le middleware effectuera la requête au backend pour obtenir le JWT.

4. Stockage du JWT dans le localStorage: Une fois que le JWT est obtenu depuis le backend, stockez-le dans le localStorage de l'application front-end. Cela vous permettra de conserver les informations d'authentification de l'utilisateur entre les actualisations de la page ou les rechargements du navigateur.

Voici un exemple de mise en œuvre de cette approche :

```javascript
// actions/authActions.js
import { LOGIN_SUCCESS, LOGOUT } from './types';

// Action creator pour se connecter avec les informations d'identification et recevoir un JWT
export const login = (userData) => (dispatch) => {
  // Effectuer la requête au backend pour authentifier l'utilisateur et obtenir le JWT
  // Ici, userData contient les informations d'identification de l'utilisateur (nom d'utilisateur, mot de passe, etc.)
  // Assurez-vous de gérer les erreurs et de dispatcher l'action LOGIN_SUCCESS avec le JWT en cas de succès
  const jwt = 'example_jwt_from_backend';

  // Stocker le JWT dans le localStorage
  localStorage.setItem('jwt', jwt);

  // Dispatch de l'action LOGIN_SUCCESS avec le JWT
  dispatch({
    type: LOGIN_SUCCESS,
    payload: jwt,
  });
};

// Action creator pour se déconnecter
export const logout = () => (dispatch) => {
  // Supprimer le JWT du localStorage
  localStorage.removeItem('jwt');

  // Dispatch de l'action LOGOUT
  dispatch({
    type: LOGOUT,
  });
};
```

```javascript
// reducers/authReducer.js
import { LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  jwt: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        jwt: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        jwt: null,
      };
    default:
      return state;
  }
};

export default authReducer;
```

```javascript
// middleware/apiMiddleware.js
import axios from 'axios';
import { login } from '../actions/authActions';

// Middleware Redux pour gérer les requêtes API
const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === 'LOGIN_REQUEST') {
    // Effectuer la requête au backend pour se connecter
    axios.post('/login', action.payload)
      .then((response) => {
        // Dispatch de l'action LOGIN_SUCCESS avec le JWT reçu du backend
        store.dispatch(login(response.data));
      })
      .catch((error) => {
        // Gérer les erreurs d'authentification
        console.error('Error logging in:', error);
      });
  }

  return next(action);
};

export default apiMiddleware;
```
