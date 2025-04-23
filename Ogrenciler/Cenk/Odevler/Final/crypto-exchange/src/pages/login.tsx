'use client';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import styles from '@/styles/components/pages/Auth.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.authWrapper}>
      <h2>Login to Rockie</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            alert('Login successful!');
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

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
