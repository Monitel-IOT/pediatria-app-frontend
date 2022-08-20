import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';
import Button from '../../UI/atoms/Button/Button';
import IconButton from '../../UI/atoms/IconButton/IconButton';
import Input from '../../UI/atoms/Input/Input';
import Label from '../../UI/atoms/Label/Label';
import FormInput from '../../UI/molecules/FormInput';
import Stack from '../../UI/organisms/Stack/Stack';
// import { ReactComponent as Trash } from '../../../assets/svg/Trash.svg';

const HomePage = () => {
  const dispatch = useDispatch();
  // const rickAndMorty = useSelector((state) => state.charactersRickAndMortyReducer);
  // const loading = useSelector((state) => state.charactersRickAndMortyReducer.loading);

  // console.log('characters', rickAndMorty.results);

  useEffect(() => {
    dispatch(getCharactersRickAndMorty());
  }, []);

  return (
    <div className="flex">
      <div className="p-5">
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
      <div>
        <Link to="/login">Login</Link>
        <Link to="/registro">Register</Link>
      </div>
    </div>
  );
};

export default HomePage;
