import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';

const PrivateRoute = ({ children, requiredRole }) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const fetchUserRole = async () => {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        }
        setLoading(false);
      };

      fetchUserRole();
    } else {
      setLoading(false); 
      router.push('/login'); 
    }
  }, [auth.currentUser, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userRole !== requiredRole) {
 
    return <div>You do not have access to this page.</div>;
  }

  return children; 
};

export default PrivateRoute;
