import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import AdminUsers from '../pages/AdminUsers';
import ProtectedRoute from '../components/ProtectedRoute';
import RoleProtectedRoute from '../components/RoleProtectedRoute';
import AuthPage from '../pages/AuthPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH (Login + Register card) */}
        <Route path="/login" element={<AuthPage />} />

        {/* LOGGED-IN USERS */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ONLY */}
        <Route
          path="/admin-users"
          element={
            <RoleProtectedRoute allowedRoles={['Admin']}>
              <AdminUsers />
            </RoleProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
