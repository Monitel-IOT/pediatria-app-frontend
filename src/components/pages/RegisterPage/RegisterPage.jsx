import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../../UI/molecules/Header';
import FormInput from '../../UI/molecules/FormInput';
import Stack from '../../UI/organisms/Stack/Stack';
import Button from '../../UI/atoms/Button/Button';
import FormContainer from '../../UI/organisms/FormContainer/FormContainer';
import { signUpWithEmailAndPassword } from '../../../thunkAction/auth/authThunk';
import GeneralHeader from '../../UI/organisms/GeneralHeader/GeneralHeader';
import Container from '../../layout/Container/Container';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const {
    error, loading, isUserAuthorized,
  } = useSelector((state) => state.authReducer);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const headerMoleculeObj = {
    title: {
      text: 'Create your account',
      size: '2xl',
      color: 'grey-main',
    },
    subtitle: {
      text: 'Lets roll!',
      size: 'base',
      color: 'blue-main',
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpWithEmailAndPassword(userInfo))
      .then((res) => {
        const message = res?.payload?.success;
        navigate('/login', {
          state: {
            message,
          },
        });
      });
  };

  if (isUserAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <main className="bg-gray-100">
        <GeneralHeader />
        <Container>
          <div className="flex items-center justify-center bg-gray-100 pt-16 h-screen">
            <div className="bg-white w-full pt-8 md:w-1/2 xl:w-1/3 rounded-lg">
              <Header {...headerMoleculeObj} />
              <FormContainer>
                <form onSubmit={handleSubmit}>
                  <FormInput label="Nombres" type="text" placeholder="John" />
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
                  <Stack horizontal="right">
                    <Button primary type="submit">
                      Registarse
                    </Button>
                  </Stack>
                </form>
              </FormContainer>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default RegisterPage;
