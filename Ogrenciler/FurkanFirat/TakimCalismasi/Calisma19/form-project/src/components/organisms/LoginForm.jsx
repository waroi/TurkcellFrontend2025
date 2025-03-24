import { useFormik } from 'formik';
import { loginFormSchema } from '../../schemas';
import { Button } from '../atoms/Button';
import { RedirectLink } from '../atoms/RedirectLink';
import { useAuth } from '../../context/AuthContext';
import { loginFormFields } from '../../constants/formFields';
import { LoginFormField } from '../molecules/LoginFormField';
import { FormHeader } from '../atoms/FormHeader';
import { useNavigate } from 'react-router';
import { LoadingSpinner } from '../atoms/LoadingSpinner';

const LoginForm = () => {
  const { loginUser, isLoading } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginFormSchema,
    onSubmit: (values) => {
      loginUser(values.email, values.password);
      navigate('/');
    },
  });

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 shadow' style={{ width: '400px' }}>
        <FormHeader title='Login' />
        <form onSubmit={formik.handleSubmit}>
          {loginFormFields.map((field) => (
            <LoginFormField key={field.id} field={field} formik={formik} />
          ))}

          <Button
            type='submit'
            className='btn btn-primary w-100'
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner /> : 'Login'}
          </Button>
        </form>

        <RedirectLink
          className='text-center text-muted mt-3'
          textContent="Don't have an account?"
          linkText='Register'
          to='/register'
        />
      </div>
    </div>
  );
};

export default LoginForm;
