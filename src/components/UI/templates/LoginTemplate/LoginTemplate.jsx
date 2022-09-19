import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '../../../../thunkAction/auth/authThunk';
// import Auth from '../../../../utils/auth';
import Button from '../../atoms/Button/Button';
import RouteLink from '../../atoms/RouteLink/RouteLink';
import FormInput from '../../molecules/FormInput';
import Header from '../../molecules/Header';
import FormContainer from '../../organisms/FormContainer/FormContainer';
import GeneralHeader from '../../organisms/GeneralHeader/GeneralHeader';
import Stack from '../../organisms/Stack/Stack';

const LoginTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { error, loading } = useSelector((state) => state.authReducer);
  const [userInfo, setUserInfo] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signInWithEmailAndPassword(userInfo));
    navigate('/');
  };

  return (
    <div>
      <GeneralHeader />
      <main>
        <div className="flex items-center justify-center py-10 bg-gray-100 h-screen">
          <div className="bg-white w-full pt-8 md:w-1/2 xl:w-1/3 rounded-lg">
            <Header {...headerMoleculeObj} />
            <FormContainer>
              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="example@example.com"
                  onInputChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                />
                <FormInput
                  label="Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  onInputChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                />
                { loading && <div className="pb-2">Cargando...</div> }
                { error && <div className="text-red-500 pb-2">{error.code}</div> }
                { location?.state?.message && <div className="text-green-500 pb-2">{location.state.message}</div> }
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

export default LoginTemplate;
