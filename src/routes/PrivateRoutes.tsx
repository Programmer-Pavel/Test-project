import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PrivateRoutes = () => {
  const auth = { token: false };
  const location = useLocation();

  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};
