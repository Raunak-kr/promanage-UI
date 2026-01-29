import { useForm } from 'react-hook-form';
import { registerApi } from '../features/auth/authService';

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface RegisterPageProps {
  onSuccess?: () => void;
}

function RegisterPage({ onSuccess }: RegisterPageProps) {
  const { register, handleSubmit } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    try {
      await registerApi(data);
      alert('Registration successful. Please login.');
      onSuccess?.(); // 👈 auto switch to login
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="First Name" {...register('firstName')} />
        <br />

        <input placeholder="Last Name" {...register('lastName')} />
        <br />

        <input placeholder="Email" {...register('email')} />
        <br />

        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
