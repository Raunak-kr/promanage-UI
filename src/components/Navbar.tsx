import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { logout } from '../features/auth/authSlice';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, role } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      {!isAuthenticated && (
        <>
          <Link to="/login" style={{ marginRight: '10px' }}>
            Login
          </Link>
          <Link to="/login">Register</Link>
        </>
      )}

      {isAuthenticated && (
        <>
          <Link to="/" style={{ marginRight: '10px' }}>
            Dashboard
          </Link>

          {role === 'Admin' && (
            <Link to="/admin-users" style={{ marginRight: '10px' }}>
              Users
            </Link>
          )}

          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
