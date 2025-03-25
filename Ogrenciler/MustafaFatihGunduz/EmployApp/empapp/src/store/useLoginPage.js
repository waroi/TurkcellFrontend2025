import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signWithEmailAndPassword, createWithEmailAndPassword } from '../services/auth_service';
import { checkIsHeAdmin } from '../services/db_service';

const useLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const user = isRegistering 
        ? await createWithEmailAndPassword(email, password)
        : await signWithEmailAndPassword(email, password);

      if (user) {
        const isAdmin = await checkIsHeAdmin();
        navigate(isAdmin ? '/admin' : '/user');
      }
    } catch (error) {
      setError('İşlem sırasında bir hata oluştu: ' + error.message);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isRegistering,
    setIsRegistering,
    error,
    handleSubmit
  };
};

export default useLoginPage;