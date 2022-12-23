import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { handleChange, initialStateForm } from '../../../../state/loginForm/loginFormSlice';
import { signInWithEmailAndPassword } from '../../../../thunkAction/auth/authThunk';
import Button from '../../atoms/Button/Button';
import RouteLink from '../../atoms/RouteLink/RouteLink';
import Typography from '../../atoms/Typography/Typography';
import FormInput from '../../molecules/FormInput';
import Card from '../../../layout/Card/Card';

const LoginForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { form, errors, isDisabled } = useSelector((state) => state.loginFormReducer);
  const { loading, user } = useSelector((state) => state.authReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInWithEmailAndPassword(form));
    dispatch(initialStateForm());
  };

  if ((loading || user?.uid) && !location?.state?.message) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FontAwesomeIcon icon={faCog} className="fa-spin text-[4rem] text-blue-main-500" />
      </div>
    );
  }

  return (
    <div className=" bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-full sm:w-[30rem]">
        <Typography component="h2" className="uppercase font-bold">
          Es genial verte!
        </Typography>
        <Typography component="h4" className="uppercase text-cyan-600">
          Ingrese Aquí
        </Typography>
        <Card className="mt-4">
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Email"
              type="email"
              placeholder="example@example.com"
              name="email"
              value={form.email}
              onChange={(e) => dispatch(handleChange(
                { name: e.target.name, value: e.target.value },
              ))}
              error={errors.email}
            />
            <FormInput
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={form.password}
              onChange={(e) => dispatch(handleChange(
                { name: e.target.name, value: e.target.value },
              ))}
              error={errors.password}
            />
            {/* { error && <div className="text-red-500 pb-2">{error.code}</div> } */}
            {/* { location?.state?.message &&
              <div className="text-green-500 pb-2">{location.state.message}</div> } */}
            <div className="flex items-center justify-between flex-wrap">
              <RouteLink to="/forgotPassword">¿Olvidaste tu contraseña?</RouteLink>
              <Button
                primary={!isDisabled}
                disabled={isDisabled}
                type="submit"
              >
                Iniciar Sesión
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
