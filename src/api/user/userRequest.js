import axios from 'axios';
import Routes from '../routes';
import { getServiceHeaders } from '../services';

const createUser = (user) => fetch(Routes.fetchUser(), {
  method: 'POST',
  headers: {
    ...getServiceHeaders('user'),
  },
  body: JSON.stringify(user),
});

export const getUserByFirebaseId = (firebaseId, token) => axios.get(
  Routes.fetchUserByFirebaseId(firebaseId),
  {
    headers: {
      ...getServiceHeaders('user'),
      Authorization: `Bearer ${token}`,
    },
  },
);

export const editUserByIdRequest = (id, body, token) => axios.put(
  Routes.fetchUser(id),
  body,
  {
    headers: {
      ...getServiceHeaders('user'),
      Authorization: `Bearer ${token}`,
    },
  },
);

export default createUser;
