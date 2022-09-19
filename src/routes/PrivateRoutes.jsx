import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const isUserAuthorized = useSelector((state) => state.authReducer.isUserAuthorized);
  if (isUserAuthorized) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default PrivateRoutes;
