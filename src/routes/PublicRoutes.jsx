import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const isUserAuthorized = useSelector((state) => state.authReducer.isUserAuthorized);
  if (isUserAuthorized) {
    return <Navigate to="/" />;
  }

  return children;
};

PublicRoutes.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default PublicRoutes;
