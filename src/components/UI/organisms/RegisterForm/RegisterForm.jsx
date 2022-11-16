import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { handleChange, initialStateForm } from '../../../../state/registerForm/registerFormSlice';
import { signUpWithEmailAndPassword } from '../../../../thunkAction/auth/authThunk';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import FormInput from '../../molecules/FormInput';
import Card from '../../../layout/Card/Card';
import Stack from '../../../layout/Stack/Stack';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.authReducer);
  const { form, errors, isDisabled } = useSelector((state) => state.registerFormReducer);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpWithEmailAndPassword(form))
      .then((res) => {
        const message = res?.payload?.success;
        navigate('/login', {
          state: {
            message,
          },
        });
        dispatch(initialStateForm());
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FontAwesomeIcon icon={faCog} className="fa-spin text-[4rem] text-blue-main-500" />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-full sm:w-[30rem]">
        <Typography component="h2" className="uppercase font-bold">
          Crea tu cuenta
        </Typography>
        <Typography component="h4" className="uppercase text-cyan-600">
          {'Let\'s Roll'}
        </Typography>
        <Card className="mt-4">
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Nombres"
              type="text"
              placeholder="Nombres"
              name="name"
              value={form.name}
              onChange={(e) => dispatch(handleChange(
                { name: e.target.name, value: e.target.value },
              ))}
              error={errors.name}
            />
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
            <Stack horizontal="right">
              <Button
                primary={!isDisabled}
                disabled={isDisabled}
                type="submit"
              >
                Registrarse
              </Button>
            </Stack>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
