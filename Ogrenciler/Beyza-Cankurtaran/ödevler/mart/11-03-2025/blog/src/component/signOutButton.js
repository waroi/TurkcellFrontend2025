import { useAuth } from '../context/authContext';

export default function SignOutButton() {
  const { logOutUser } = useAuth();

  return (
    <button className='btn btn-danger' onClick={logOutUser}>
      Çıkış yap
    </button>
  );
}
