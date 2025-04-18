import RegisterForm from '@/components/auth/RegisterForm';
import GuestRoute from '@/components/routes/GuestRoute';

export default function RegisterPage() {
  return (
    <GuestRoute>
      <RegisterForm />
    </GuestRoute>
  );
}
