import React from 'react';
import PropTypes from 'prop-types';
/* Third components */
import Modal from 'react-modal';

const OptionModal = (props) => {
  const { selectedOption, handlerCloseModal } = props;

  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={handlerCloseModal}
      contentLabel="Selected option"
    >
      <h3>Selected option</h3>
      {selectedOption && <p>{selectedOption}</p> }
      <button onClick={handlerCloseModal}>Okay</button>
    </Modal>
  );
};

OptionModal.defaultProps = {
  selectedOption: false,
};

OptionModal.propTypes = {
  selectedOption: PropTypes.bool,
  handlerCloseModal: PropTypes.func.isRequired,
};

export default OptionModal;
