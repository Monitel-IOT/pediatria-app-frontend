import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

const PrivateRoutes = ({ children }) => {
  if (Auth.isLogin()) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default PrivateRoutes;
