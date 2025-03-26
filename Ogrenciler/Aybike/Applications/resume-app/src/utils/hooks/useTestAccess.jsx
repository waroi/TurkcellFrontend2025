import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TestService } from '../../services/TestService';

const useTestAccess = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    if (event) event.preventDefault()

    setIsLoading(true)
    try {
      const hasAccess = await TestService.checkAccess(email)

      if (hasAccess) {
        navigate("/test")
      } else {
        alert("Erişim izniniz yok hemen Yöneticiden onay almaya gidin")
      }
    } catch (error) {
      alert("Bir hata oluştu. Lütfen daha sonra tekrar deneeeeeeeee")
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    email,
    setEmail,
    handleSubmit
  }
}

export default useTestAccess