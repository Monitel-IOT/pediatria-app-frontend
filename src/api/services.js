import environment from './environment.config';

const environmentRootPaths = {
  local: {
    backendPediatria: 'http://127.0.0.1:5000/api/v1',
  },
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
  appointment: {
    endpoint: `${environmentRootPaths[environment].backendPediatria}/appointment`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
  patient: {
    endpoint: `${environmentRootPaths[environment].backendPediatria}/patient`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
};

export const getServiceEndpointService = (service) => services[service].endpoint;
export const getServiceHeaders = (service) => services[service].headers;
