import React from 'react';
import PropTypes from 'prop-types';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../molecules/Modal/Modal';
import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';

const ResponseModal = ({
  isOpen, onClose, status, onSuccessMessage, onErrorMessage, onError,
}) => (
  <Modal isOpen={isOpen} closeModal={onClose} showXMark>
    <div className="flex flex-col justify-around w-full h-[10rem]">
      <div className="flex justify-center">
        {status
          ? <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
          : <FontAwesomeIcon icon={faCircleXmark} size="2xl" />}
      </div>
      {status
        ? <Typography component="h3">{onSuccessMessage}</Typography>
        : <Typography component="h3">{onErrorMessage}</Typography>}

      {status
        ? (
          <div className="flex justify-center">
            <Button primary onClick={onClose}>Aceptar</Button>
          </div>
        )
        : (
          <div className="flex justify-between">
            <Button danger onClick={onClose}>Aceptar</Button>
            <Button primary onClick={onError}>Volver a intentar</Button>
          </div>
        )}

    </div>
  </Modal>
);

ResponseModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  status: PropTypes.bool,
  onSuccessMessage: PropTypes.string,
  onErrorMessage: PropTypes.string,
  onError: PropTypes.func,
};

export default ResponseModal;
