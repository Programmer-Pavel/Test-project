import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Contacts } from '../pages/Contacts';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRoutes = () => (
  <Routes>
    {/* private routes */}
    <Route element={<PrivateRoutes />}>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          path="/"
          element={<Contacts />}
        />
      </Route>
    </Route>

    {/* public routes */}
    <Route
      path="/login"
      element={<Login />}
    />
    <Route
      path="/register"
      element={<Register />}
    />
  </Routes>
);
