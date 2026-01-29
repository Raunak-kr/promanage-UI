import { useForm } from 'react-hook-form';

interface ForgotPasswordForm {
  email: string;
}

function ForgotPasswordPage() {
  const { register, handleSubmit } = useForm<ForgotPasswordForm>();

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log('Forgot password email:', data.email);
    alert('If this email exists, reset instructions will be sent.');
  };

  return (
    <div>
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter your email"
          {...register('email')}
        />
        <br />

        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
