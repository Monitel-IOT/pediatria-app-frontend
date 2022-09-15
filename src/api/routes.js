import { getServiceEndpointService } from './services';

const Routes = {
  fetchUser: () => `${getServiceEndpointService('user')}`,
};

export default Routes;
