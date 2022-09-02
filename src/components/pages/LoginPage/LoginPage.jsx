import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../../UI/molecules/Header';
import FormInput from '../../UI/molecules/FormInput';
import Stack from '../../UI/organisms/Stack/Stack';
import Button from '../../UI/atoms/Button/Button';
import RouteLink from '../../UI/atoms/RouteLink/RouteLink';
import FormContainer from '../../UI/organisms/FormContainer/FormContainer';
import { signInWithEmailAndPassword } from '../../../thunkAction/auth/authThunk';
import Auth from '../../../utils/auth';
import GeneralHeader from '../../UI/organisms/GeneralHeader/GeneralHeader';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const headerMoleculeObj = {
    title: {
      text: 'Its great to see you!',
      size: '2xl',
      color: 'grey-main',
    },
    subtitle: {
      text: 'Login here',
      size: 'base',
      color: 'blue-main',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInWithEmailAndPassword(user))
      .then((action) => {
        Auth.saveSession(action.payload);
        navigate('/');
      });
  };

  if (Auth.isLogin()) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {/* LoginTemplate */}
      <aside>
        {/* MainBar */}
      </aside>
      <main>
        {/* NavBar */}
        {/* Header */}
        <GeneralHeader />
        <div className="flex items-center justify-center py-10 bg-gray-100 h-screen">
          <div className="bg-white w-full pt-8 md:w-1/2 xl:w-1/3 rounded-lg">
            <Header {...headerMoleculeObj} />
            <FormContainer>
              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="example@example.com"
                  onInputChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <FormInput
                  label="Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  onInputChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <RouteLink to="/forgotPassword">¿Olvidaste tu contraseña?</RouteLink>
                <Stack horizontal="right">
                  <Button primary type="submit">
                    Iniciar Sesión
                  </Button>
                </Stack>
              </form>
            </FormContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
