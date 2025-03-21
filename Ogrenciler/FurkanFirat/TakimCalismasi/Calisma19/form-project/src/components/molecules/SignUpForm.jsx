import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'Ad en az 3 karakter olmalıdır')
        .required('Ad zorunludur'),
      email: Yup.string()
        .email('Geçerli bir e-posta adresi girin')
        .required('E-posta zorunludur'),
      password: Yup.string()
        .min(6, 'Şifre en az 6 karakter olmalıdır')
        .required('Şifre zorunludur'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Şifreler eşleşmiyor')
        .required('Şifre tekrar zorunludur'),
    }),
    onSubmit: (values) => {
      console.log('Form Gönderildi:', values);
    },
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 shadow-lg' style={{ width: '400px' }}>
        <h3 className='text-center'>Kayıt Ol</h3>
        <form onSubmit={formik.handleSubmit}>
          {/* Full Name Field */}
          <div className='mb-3'>
            <label htmlFor='fullName' className='form-label'>
              Ad Soyad
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              className={`form-control ${
                formik.touched.fullName && formik.errors.fullName
                  ? 'is-invalid'
                  : ''
              }`}
              placeholder='Adınızı ve Soyadınızı girin'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div className='invalid-feedback'>{formik.errors.fullName}</div>
            )}
          </div>

          {/* Email Field */}
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              E-posta
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={`form-control ${
                formik.touched.email && formik.errors.email ? 'is-invalid' : ''
              }`}
              placeholder='E-posta adresiniz'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
              placeholder='Şifrenizi girin'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='invalid-feedback'>{formik.errors.password}</div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className='mb-3'>
            <label htmlFor='confirmPassword' className='form-label'>
              Şifreyi Tekrar Girin
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className={`form-control ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'is-invalid'
                  : ''
              }`}
              placeholder='Şifrenizi tekrar girin'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className='invalid-feedback'>
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          {/* Submit Button */}
          <button type='submit' className='btn btn-primary w-100'>
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
