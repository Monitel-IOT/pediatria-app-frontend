import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Container from '../../../layout/Container/Container';
import GeneralHeader from '../../organisms/GeneralHeader/GeneralHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import Alert from '../../molecules/Alert/Alert';
import useFirebaseMessage from '../../../hooks/useFirebaseMessage';
import {
  openLoginErrorAlert, closeLoginErrorAlert, openLoginSuccessAlert, closeLoginSuccessAlert,
} from '../../../../state/ui/uiSlice';

const LoginTemplate = () => {
  const { error } = useSelector((state) => state.authReducer);
  const { showLoginErrorAlert, showLoginSuccessAlert } = useSelector((state) => state.uiReducer);
  const [message, setFirebaseError] = useFirebaseMessage();

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (error?.code) {
      dispatch(openLoginErrorAlert());
      setFirebaseError(error?.code);
    }
  }, [error?.code]);

  useEffect(() => {
    if (location?.state?.message) {
      dispatch(openLoginSuccessAlert());
    }
  }, [location?.state?.message]);

  return (
    <div>
      <GeneralHeader />
      <main className="bg-gray-100">
        <Container>
          <LoginForm />
        </Container>
      </main>
      {showLoginErrorAlert && error && (
        <div className="absolute top-[8rem] w-full flex justify-center">
          <Alert
            type="danger"
            onClose={() => { dispatch(closeLoginErrorAlert()); }}
            className="w-1/2"
          >
            {message}
          </Alert>
        </div>
      )}

      {showLoginSuccessAlert && location?.state?.message
      && (
        <div className="absolute top-[8rem] w-full flex justify-center">
          <Alert
            type="success"
            onClose={() => { dispatch(closeLoginSuccessAlert()); }}
            className="w-1/2"
          >
            {location?.state?.message}
          </Alert>
        </div>
      )}
    </div>
  );
};
export default LoginTemplate;
