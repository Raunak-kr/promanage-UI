import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  allowedRoles: string[];
}

function RoleProtectedRoute({ children, allowedRoles }: Props) {
  const { isAuthenticated, role } = useSelector(
    (state: RootState) => state.auth
  );

  // not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // role not allowed
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default RoleProtectedRoute;
