// import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare, faCoffee, faTrashCan, faCog,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getUserByFirebaseIdAPI } from './thunkAction/profile/profileThunk';
import AppRouter from './routes/AppRouter';
import { addUser, authorizeUser, unauthorizeUser } from './state/auth/authSlice';
import { auth } from './config/firebase/firebase.config';

library.add(fab, faCheckSquare, faCoffee, faTrashCan);

const App = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const authStateListener = () => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setLoading(false);
        return dispatch(unauthorizeUser());
      }

      const data = await user.toJSON();
      const token = await auth.currentUser.getIdToken(true);
      // add user & token to state
      await dispatch(getUserByFirebaseIdAPI({ firebaseId: user.uid, token }));
      await dispatch(addUser({ ...data, token }));
      setLoading(false);
      // Esta linea se añadio para cargar el usuario de la base de datos una sola vez
      return dispatch(authorizeUser());
    });
  };

  useEffect(() => {
    authStateListener();
  }, [authStateListener]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <FontAwesomeIcon icon={faCog} className="fa-spin text-[4rem] text-blue-main-500" />
        </div>
      ) : <AppRouter />}
    </div>
  );
};

export default App;
