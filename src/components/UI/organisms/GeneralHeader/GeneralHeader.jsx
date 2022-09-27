import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../../../layout/Container/Container';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';

const GeneralHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickLogin = () => {
    navigate('/login');
  };
  const handleClickRegister = () => {
    navigate('/registro');
  };

  return (
    <div className="bg-white w-full flex h-20 items-center fixed shadow-lg">
      <Container className="flex">
        <Typography component="h1" className="font-bold">PEDIATRIA</Typography>
        <div className="ml-auto w-30">
          { location.pathname === '/registro' && <Button primary uppercase onClick={handleClickLogin}>Login</Button> }
          { location.pathname === '/login' && <Button primary uppercase onClick={handleClickRegister}>Registrarse</Button>}
        </div>
      </Container>
    </div>
  );
};
export default GeneralHeader;
