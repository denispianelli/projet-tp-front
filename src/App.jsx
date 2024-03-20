import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/ui/Modal';
import Home from './pages/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { closeModal } from './store/slices/modalSlice';
import Signin from './components/form/Signin';
import { checkAuth } from './utils/authUtils';
import { resetError } from './store/slices/authSlice';
import Signup from './components/form/Signup';
import SignupSuccess from './components/ui/signupSuccess';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ModifyEmail from './components/form/ModifyEmail';
import EmailUpdated from './components/ui/EmailUpdated';
import PasswordUpdated from './components/ui/PasswordUpdated';
import ModifyPassword from './components/form/ModifyPassword';

function App() {
  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const modalContent = useSelector((state) => state.modal.content);
  const themeMode = useSelector((state) => state.theme.mode);

  const isAuth = localStorage.getItem('logged') === 'true';

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
    default:
      break;
  }

  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    checkAuth(dispatch);
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.add(themeMode);

    return () => {
      document.documentElement.classList.remove(themeMode);
    };
  }, [themeMode]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user/:username"
          element={isAuth ? <Profile /> : <Navigate to="/" />}
        />
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
      <Footer />
    </>
  );
}

export default App;
