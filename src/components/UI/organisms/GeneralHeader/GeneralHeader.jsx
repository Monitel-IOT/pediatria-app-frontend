import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    <div className="bg-white w-full flex h-20 items-center px-10 fixed shadow-lg">
      <Typography component="h2">PEDIATRIA</Typography>
      <div className="ml-auto w-30">
        { location.pathname === '/registro' && <Button primary uppercase onClick={handleClickLogin}>Login</Button> }
        { location.pathname === '/login' && <Button primary uppercase onClick={handleClickRegister}>Registrarse</Button>}
      </div>
    </div>
  );
};
export default GeneralHeader;
