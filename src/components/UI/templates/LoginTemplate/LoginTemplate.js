import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Container from '../../../layout/Container/Container';
import GeneralHeader from '../../organisms/GeneralHeader/GeneralHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import Alert from '../../molecules/Alert/Alert';
import { closeLoginAlert, initialStateForm, openLoginAlert } from '../../../../state/loginForm/loginFormSlice';
import 'animate.css';

const LoginTemplate = () => {
  const {
    typeLoginAlert,
    loginAlertMessage,
    loginAlertAnimation,
  } = useSelector((state) => state.loginFormReducer);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.message) {
      dispatch(openLoginAlert({
        message: location?.state?.message,
        type: 'success',
      }));
    }
    return () => {
      dispatch(initialStateForm());
    };
  }, []);

  return (
    <div>
      <GeneralHeader />
      <div className="bg-gray-100">
        <Container>
          <main className="bg-gray-100 pt-20 flex items-center justify-center h-screen">
            <div
              className={
                classNames('absolute top-[6rem] animate__animated', loginAlertAnimation)
              }
            >
              <Alert
                type={typeLoginAlert}
                outline
                onClose={() => { dispatch(closeLoginAlert()); }}
                className="w-full sm:w-[500px]"
              >
                {loginAlertMessage}
              </Alert>
            </div>
            <div>
              <LoginForm />
            </div>
          </main>
        </Container>
      </div>
    </div>
  );
};
export default LoginTemplate;
