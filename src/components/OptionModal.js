import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel='Selected Option'
    closeTimeoutMS={200}
    onRequestClose={handleClearSelectedOption}>
    <h3 className='modal__title'>Selected Option</h3>
    {selectedOption && <p className='modal__body'>{selectedOption}</p>}
    <button onClick={handleClearSelectedOption}>Ok</button>
  </Modal>
);

export default OptionModal;
