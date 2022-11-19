import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from '../../../../thunkAction/auth/authThunk';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import Wrapper from '../../../layout/Wrapper/Wrapper';

const HomeTemplate = () => {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await dispatch(signOut());
    await navigate('/login');
  };

  return (
    <Wrapper>
      <div className="h-[calc(100vh-5rem)]">
        {/* Here content */}
        <div className="flex flex-wrap p-4">
          <Typography component="h1">
            Hello,
            {' '}
            {user.email}
          </Typography>
          <div className="ml-auto">
            <Button primary onClick={handleSignOut}>Cerrar Sesion</Button>
          </div>
        </div>
        <div className="p-5">
          <ul>
            <li>
              <NavLink to="login" className="underline underline-offset-1 text-blue-500">Go to Login</NavLink>
            </li>
            <li>
              <NavLink to="registro" className="underline underline-offset-1 text-blue-500">Go to Register</NavLink>
            </li>
            <li>
              <NavLink to="nuevo-paciente" className="underline underline-offset-1 text-blue-500">Go to Nuevo paciente</NavLink>
            </li>
            <li>
              <NavLink to="searchPatient" className="underline underline-offset-1 text-blue-500">Go to Buscar Paciente</NavLink>
            </li>
            <li>
              <NavLink to="dashboard" className="underline underline-offset-1 text-blue-500">Go to Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="nueva-atencion" className="underline underline-offset-1 text-blue-500">Go to Nueva Atención</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeTemplate;
