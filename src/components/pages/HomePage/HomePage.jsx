import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from '../../../thunkAction/auth/authThunk';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';
import Auth from '../../../utils/auth';
import Button from '../../UI/atoms/Button/Button';
import Typography from '../../UI/atoms/Typography/Typography';
// import { ReactComponent as Trash } from '../../../assets/svg/Trash.svg';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const rickAndMorty = useSelector((state) => state.charactersRickAndMortyReducer);
  // const error = useSelector((state) => state.authReducer.error);

  // console.log('characters', rickAndMorty.results);

  const handleSignOut = async () => {
    await dispatch(signOut());
    navigate('/login');
    Auth.deleteSession();
  };

  useEffect(() => {
    dispatch(getCharactersRickAndMorty());
  }, []);

  return (
    <div>
      {/* <div className="p-5">
        <h1 className="text-primary">Button Component</h1>
        <Button
          disabled
          iconLeft={<FontAwesomeIcon icon={faTrashCan} />}
        >
          Remove
        </Button>
      </div>
      <div className="p-5">
        <h2>IconButton Component</h2>
        <IconButton
          outline="danger"
          icon={<FontAwesomeIcon icon={faTrashCan} />}
        />
        <IconButton outline="blue" icon={<FontAwesomeIcon icon={faPaperPlane} />} />
      </div>
      <div className="p-5">
        <h2>Input Component</h2>
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="Name..." />
      </div>
      <div className="p-5">
        <h2>FormInput Component</h2>
        <FormInput label="Name" type="text" placeholder="Name..." id="mi" />
        <FormInput label="Password" type="password" placeholder="Password..." />
        <FormInput label="Email" type="email" placeholder="Email..." />
        <Stack horizontal="right">
          <Button primary>
            Register
          </Button>
        </Stack>
      </div>
      <div className="p-5">
        <Pager maxPages={6} index={pageIndex} onChange={changeIndex} />
  </div> */}
      <div className="flex flex-wrap p-4">
        <Typography component="h1">
          Hello,
          {' '}
          {Auth.getSession().email}
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
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
