import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';

import { Context } from './Context';
import Button from './Button';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

const ResetModal: React.FCX = ({ className }) => {
  const context: any = useContext(Context);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const resetTable = (): void => {
    setIsOpen(false);
    context.resetTable();
  };

  return (
    <div className={className}>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        className={className}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p>Do you really want to reset Table?</p>
        <Button onClick={closeModal}>Close</Button>
        <Button onClick={resetTable}>Delete</Button>
      </Modal>
    </div>
  );
};

export default ResetModal;
