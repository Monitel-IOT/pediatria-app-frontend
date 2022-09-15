import environment from './environment.config';

const environmentRootPaths = {
  dev: {
    backendPediatria: 'https://pediatria-dev.herokuapp.com/api/v1',
  },
  qa: {
    backendPediatria: 'https://pediatria-dev.herokuapp.com/api/v1',
  },
  prod: {
    backendPediatria: 'https://pediatria-dev.herokuapp.com/api/v1',
  },
};

const services = {
  user: {
    endpoint: `${environmentRootPaths[environment].backendPediatria}/user`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
};

export const getServiceEndpointService = (service) => services[service].endpoint;
export const getServiceHeaders = (service) => services[service].headers;
