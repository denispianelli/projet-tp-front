import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/ui/Modal';
import Home from './pages/Home';
import { closeModal } from './store/slices/modalSlice';
import Signin from './components/form/Signin';
import { resetError } from './store/slices/authSlice';
import Signup from './components/form/Signup';
import SignupSuccess from './components/ui/signupSuccess';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ModifyEmail from './components/form/ModifyEmail';
import EmailUpdated from './components/ui/EmailUpdated';
import PasswordUpdated from './components/ui/PasswordUpdated';
import ModifyPassword from './components/form/ModifyPassword';
import Dashboard from './pages/Dashboard';
import checkAuthMiddleware from './store/middleware/checkAuthMiddleware';
import RequestResetPassword from './components/form/RequestResetPassword';
import PasswordReset from './components/ui/PasswordReset';
import ResetPassword from './pages/ResetPassword';
import Game from './pages/Game';
import EmailVerified from './pages/EmailVerified';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalNotice from './pages/LegalNotice';
import Lore from './pages/Lore';
import Enemies from './pages/Enemies';
import Characters from './pages/Characters';
import Stages from './pages/Stages';
import Guide from './pages/Guide';

function App() {
  const dispatch = useDispatch();

  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    dispatch(checkAuthMiddleware());
    setIsAuthChecked(true);
  }, []);

  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const modalContent = useSelector((state) => state.modal.content);
  const themeMode = useSelector((state) => state.theme.mode);
  const themeModeLocal = localStorage.getItem('theme');

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  let componentToRender = null;

  switch (modalContent) {
    case 'signin':
      componentToRender = <Signin />;
      break;
    case 'signup':
      componentToRender = <Signup />;
      break;
    case 'signupSuccess':
      componentToRender = <SignupSuccess />;
      break;
    case 'modify-email':
      componentToRender = <ModifyEmail />;
      break;
    case 'emailUpdated':
      componentToRender = <EmailUpdated />;
      break;
    case 'modify-password':
      componentToRender = <ModifyPassword />;
      break;
    case 'passwordUpdated':
      componentToRender = <PasswordUpdated />;
      break;
    case 'resetPassword':
      componentToRender = <RequestResetPassword />;
      break;
    case 'passwordReset':
      componentToRender = <PasswordReset />;
      break;
    default:
      break;
  }

  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    if (themeModeLocal) {
      document.documentElement.classList.add(themeModeLocal);
    } else {
      document.documentElement.classList.add(themeMode);
    }

    return () => {
      document.documentElement.classList.remove(themeMode);
    };
  }, [themeMode]);

  if (!isAuthChecked) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user/:username"
          element={isAuth ? <Profile /> : <Navigate to="/" />}
        />
        <Route
          path="/user/:username/dashboard"
          element={isAdmin ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/account/reset/password/:token"
          element={<ResetPassword />}
        />
        <Route path="/account/email-verified/:token" element={<EmailVerified />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/enemies" element={<Enemies />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {isModalOpen && (
        <Modal
          onClose={() => {
            dispatch(resetError());
            dispatch(closeModal());
          }}
        >
          {componentToRender}
        </Modal>
      )}
    </>
  );
}

export default App;
