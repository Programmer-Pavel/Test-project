import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { TestComponent } from '../pages/TestComponent';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRoutes = () => (
  <Routes>
    <Route element={<PrivateRoutes />}>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/test"
        element={<TestComponent />}
      />
    </Route>

    <Route
      path="/login"
      element={<Login />}
    />
  </Routes>
);
