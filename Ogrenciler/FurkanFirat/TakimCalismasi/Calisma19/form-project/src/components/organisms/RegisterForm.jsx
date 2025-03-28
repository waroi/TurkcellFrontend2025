import { useState } from 'react';
import { useFormik } from 'formik';
import { registerFormSchema } from '../../schemas';
import { Button } from '../atoms/Button';
import { RedirectLink } from '../atoms/RedirectLink';
import { useAuth } from '../../context/AuthContext';
import { registerFormFields } from '../../constants/formFields';
import { RegisterFormField } from '../molecules/RegisterFormField';
import { FormHeader } from '../atoms/FormHeader';
import { useNavigate } from 'react-router';
import { LoadingSpinner } from '../atoms/LoadingSpinner';

const RegisterForm = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const [registerLoading, setRegisterLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerFormSchema,
    onSubmit: async (values) => {
      try {
        setRegisterLoading(true);
        await registerUser(values.fullName, values.email, values.password);
        navigate('/');
      } catch (error) {
        console.error('Registration failed:', error);
      } finally {
        setRegisterLoading(false);
      }
    },
  });

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 shadow-lg' style={{ width: '400px' }}>
        <FormHeader title='Register' />
        <form onSubmit={formik.handleSubmit}>
          {registerFormFields.map((field) => (
            <RegisterFormField key={field.id} field={field} formik={formik} />
          ))}

          <Button
            type='submit'
            className='btn btn-primary w-100'
            disabled={registerLoading}
          >
            {registerLoading ? <LoadingSpinner /> : 'Register'}
          </Button>
        </form>

        <RedirectLink
          textContent='Already have an account?'
          linkText='Login'
          to='/login'
          className='text-center text-muted mt-3'
        />
      </div>
    </div>
  );
};

export default RegisterForm;
