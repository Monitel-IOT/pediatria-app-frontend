import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = true;
  // Posteriormente se obtendrá el valor real por ahora solo es true
  return (
    auth ? <Outlet /> : <Navigate to="/" />
  );
};

export default PrivateRoutes;
