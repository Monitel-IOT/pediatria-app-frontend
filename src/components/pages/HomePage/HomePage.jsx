import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { getCharactersRickAndMorty } from '../../../thunkAction/rickAndMorty/rickAndMortyThunk';
import Button from '../../UI/atoms/Button/Button';
import IconButton from '../../UI/atoms/IconButton/IconButton';
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
    <div>
      <h1 className="text-primary">Button</h1>
      <Button
        disabled
        iconLeft={<FontAwesomeIcon icon={faTrashCan} />}
        onClick={() => console.log('Removing...')}
      >
        Remove
      </Button>
      <br />
      <br />
      <hr />
      <h2>IconButton</h2>
      <IconButton
        outline="danger"
        icon={<FontAwesomeIcon icon={faTrashCan} />}
        onClick={() => console.log('Removing...')}
      />
      <IconButton outline="blue" icon={<FontAwesomeIcon icon={faPaperPlane} />} />
    </div>
  );
};

export default HomePage;
