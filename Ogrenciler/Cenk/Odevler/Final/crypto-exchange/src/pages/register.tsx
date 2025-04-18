'use client';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import styles from '@/styles/components/pages/Auth.module.scss';

export default function RegisterPage() {
  return (
    <div className={styles.authWrapper}>
      <h2>Register to Rockie</h2>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string()
            .min(8, 'Min 8 characters')
            .matches(/[A-Z]/, 'At least one uppercase letter')
            .matches(/[0-9]/, 'At least one number')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            alert('Registration successful!');
          } catch (err: any) {
            alert(err.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Form className={styles.authForm}>
          <label>Email/ID</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className={styles.error} />

          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className={styles.error} />

          <label>Confirm Password</label>
          <Field type="password" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" className={styles.error} />

          <button type="submit">Pre-Register</button>
        </Form>
      </Formik>
    </div>
  );
}
