'use client';

import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '@/lib/firebase';
import { db } from '@/lib/firestore';
import { UserProfile } from '@/types/user';
import styles from '@/styles/components/pages/Profile.module.scss';

const initialValues: UserProfile = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  gender: '',
  birthDate: '',
  features: {
    depositAssets: false,
    withdrawAssets: false,
    cardPurchases: false,
    bankDeposit: false,
    fiatWallet: false,
    marginWallet: false,
  },
};

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (!user) return;
      const ref = doc(db, 'users', user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setProfile(snap.data() as UserProfile);
      } else {
        setProfile({ ...initialValues, email: user.email || '' });
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phone: Yup.string(),
    country: Yup.string(),
    gender: Yup.string(),
    birthDate: Yup.string(),
  });

  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>No user profile found.</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.avatar} />
        <h4>Peterson Kennedy</h4>
        <p>{profile.email}</p>
        <div className={styles.menu}>
          <div className={styles.menuItem}>User Profile</div>
          <div className={styles.menuItem}>Referrals</div>
          <div className={styles.menuItem}>API keys</div>
          <div className={styles.menuItem}>Login history</div>
          <div className={styles.menuItem}>2FA</div>
          <div className={styles.menuItem}>Change password</div>
        </div>
      </div>

      <Formik
        initialValues={profile}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const user = auth.currentUser;
          if (!user) return;
          const ref = doc(db, 'users', user.uid);
          await setDoc(ref, { ...values, updatedAt: serverTimestamp() }, { merge: true });
          alert('Profile updated');
        }}
      >
        {({ values, handleChange }) => (
          <Form className={styles.form}>
            <h2>User Profile</h2>

            <div className={styles.formGroup}>
              <div className={styles.inputField}>
                <label>First Name</label>
                <Field name="firstName" />
              </div>
              <div className={styles.inputField}>
                <label>Last Name</label>
                <Field name="lastName" />
              </div>
              <div className={styles.inputField}>
                <label>Email</label>
                <Field name="email" disabled />
              </div>
              <div className={styles.inputField}>
                <label>Phone</label>
                <Field name="phone" />
              </div>
              <div className={styles.inputField}>
                <label>Country</label>
                <Field name="country" />
              </div>
              <div className={styles.inputField}>
                <label>Gender</label>
                <Field name="gender" as="select">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Field>
              </div>
              <div className={styles.inputField}>
                <label>Birth Date</label>
                <Field name="birthDate" type="date" />
              </div>
            </div>

            <h3>Features</h3>
            <div className={styles.switchGroup}>
              {Object.entries(values.features).map(([key, value]) => (
                <div key={key} className={styles.switch}>
                  <span>{key}</span>
                  <input
                    type="checkbox"
                    name={`features.${key}`}
                    checked={value}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Update Profile
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfilePage;
