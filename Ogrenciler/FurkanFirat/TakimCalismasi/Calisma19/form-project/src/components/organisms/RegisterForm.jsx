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
  const { registerUser, isLoading } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerFormSchema,
    onSubmit: (values) => {
      registerUser(values.fullName, values.email, values.password);
      navigate('/');
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

          <Button type='submit' className='btn btn-primary w-100'>
            {isLoading ? <LoadingSpinner /> : 'Register'}
          </Button>
        </form>

        <RedirectLink
          textContent='Already have an account?'
          linkText='Login'
          to='/login'
        />
      </div>
    </div>
  );
};

export default RegisterForm;
