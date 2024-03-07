import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/ui/Modal';
import Home from './pages/Home';
import { closeModal } from './slices/modalSlice';
import Signin from './components/form/Signin';

function App() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  return (
    <>
      <Home />
      <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())}>
        <Signin />
      </Modal>
    </>
  );
}

export default App;
