import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../../molecules/Modal/Modal';
import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';
import { signOut } from '../../../../thunkAction/auth/authThunk';

const LogOutModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await dispatch(signOut());
    await navigate('/login');
  };

  const closeLogOutModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeLogOutModal} showXMark>
      <div className="flex flex-col justify-around w-full h-[10rem]">
        <Typography component="h3">¿Estás seguro de cerrar sesión?</Typography>
        <div className="flex justify-between">
          <Button danger onClick={handleSignOut}>Aceptar</Button>
          <Button primary onClick={closeLogOutModal}>Cancelar</Button>
        </div>
      </div>
    </Modal>
  );
};

LogOutModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default LogOutModal;
