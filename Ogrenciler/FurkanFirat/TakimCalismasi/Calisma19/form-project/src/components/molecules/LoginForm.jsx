import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Geçerli bir email giriniz')
        .required('Email alanı zorunludur'),
      password: Yup.string()
        .min(6, 'Şifre en az 6 karakter olmalıdır')
        .required('Şifre alanı zorunludur'),
    }),
    onSubmit: (values) => {
      console.log('Login Data:', values);
      alert('Giriş başarılı!');
    },
  });

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 shadow' style={{ width: '400px' }}>
        <h2 className='text-center mb-4'>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Email Field */}
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={`form-control ${
                formik.touched.email && formik.errors.email ? 'is-invalid' : ''
              }`}
              placeholder='example@email.com'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className='invalid-feedback'>{formik.errors.email}</div>
            )}
          </div>

          {/* Password Field */}
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Şifre
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className={`form-control ${
                formik.touched.password && formik.errors.password
                  ? 'is-invalid'
                  : ''
              }`}
              placeholder='Şifrenizi giriniz'
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='invalid-feedback'>{formik.errors.password}</div>
            )}
          </div>

          {/* Submit Button */}
          <button type='submit' className='btn btn-primary w-100'>
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
