// 

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../features/auth/authSlice';
import { loginApi } from '../features/auth/authService';

interface LoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await loginApi(data); // 🔥 API call
      dispatch(loginSuccess(response.token)); // 🔥 Redux
      navigate('/'); // 🔥 Dashboard
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register('email')} />
        <br />

        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
