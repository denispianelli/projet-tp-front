// Modal.js
import React from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import PropTypes from 'prop-types';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          type="button"
          onClick={onClose}
          className="modal-close-button"
          aria-label="Close"
        >
          <HiOutlineXMark className="close-icon" />
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
