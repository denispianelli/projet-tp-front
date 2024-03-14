import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/ui/Modal';
import Home from './pages/Home';
import { closeModal } from './store/slices/modalSlice';
import Signin from './components/form/Signin';
import checkAuth from './utils/authUtils';
import { resetError } from './store/slices/authSlice';
import Signup from './components/form/Signup';
import SignupSuccess from './components/ui/signupSuccess';

function App() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const modalContent = useSelector((state) => state.modal.content);
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

  return (
    <>
      <Home />
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
