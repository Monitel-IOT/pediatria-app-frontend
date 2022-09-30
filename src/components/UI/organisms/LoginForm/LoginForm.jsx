import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleChange, initialStateForm } from '../../../../state/loginForm/loginFormSlice';
import { signInWithEmailAndPassword } from '../../../../thunkAction/auth/authThunk';
import Button from '../../atoms/Button/Button';
import RouteLink from '../../atoms/RouteLink/RouteLink';
import Typography from '../../atoms/Typography/Typography';
import FormInput from '../../molecules/FormInput';
import Card from '../../../layout/Card/Card';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { form, errors, isDisabled } = useSelector((state) => state.loginFormReducer);
  const { error, loading } = useSelector((state) => state.authReducer);

  /* const headerMoleculeObj = {
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
  }; */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signInWithEmailAndPassword(form));
    navigate('/');
    dispatch(initialStateForm());
  };
  return (
    <div className="bg-gray-100 m-auto sm:max-w-md pt-40 sm:pt-32 h-screen">
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
          { loading && <div className="pb-2">Cargando...</div> }
          { error && <div className="text-red-500 pb-2">{error.code}</div> }
          { location?.state?.message && <div className="text-green-500 pb-2">{location.state.message}</div> }
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
  );
};

export default LoginForm;
