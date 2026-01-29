import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './features/auth/authSlice';
import { jwtDecode } from 'jwt-decode';
import AppRoutes from './routes/AppRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkTokenExpiry = () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const decoded: any = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          dispatch(logout());
        }
      } catch {
        dispatch(logout());
      }
    };

    // 🔹 app start pe check
    checkTokenExpiry();

    // 🔹 har 1 minute me check
    const interval = setInterval(checkTokenExpiry, 60 * 1000);

    // cleanup
    return () => clearInterval(interval);
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
