import Routes from '../routes';
import { getServiceHeaders } from '../services';

const createUser = (user) => fetch(Routes.fetchUser(), {
  method: 'POST',
  headers: {
    ...getServiceHeaders('user'),
  },
  body: JSON.stringify(user),
});

export const getUserByFirebaseId = (id) => fetch(Routes.fetchUserByFirebaseId(id));

export default createUser;
