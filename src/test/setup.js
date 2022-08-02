import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../state/store';

const RootWrapper = ({ children }) => (
  <Provider store={store}>
    <Router>
      {children}
    </Router>
  </Provider>
);

RootWrapper.propTypes = {
  children: PropTypes.element,
};

const customRender = (ui, options) => render(ui, { wrapper: RootWrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
